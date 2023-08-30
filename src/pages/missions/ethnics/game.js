import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import GameArea from '@/components/Ethnics/GameArea'
import {useEffect, useRef, useState} from 'react'
import Card from '@/components/Cards/Card'
import Button from '@/components/Button'
import CardInfo from '@/components/Cards/CardInfo'
import InternalLink from '@/components/Links/InternalLink'
import Link from 'next/link'

export default function Ethnics() {

    const [characterPosition, setCharacterPosition] = useState(0)
    const [isInteractable, setIsInteractable] = useState(false)
    const [isMovingLeft, setIsMovingLeft] = useState(false)
    const [isMovingRight, setIsMovingRight] = useState(false)
    const [interactionPosition, setInteractionPosition] = useState(0)
    const [modal, setModal] = useState(false)

    const isInteractableRef = useRef(isInteractable)

    const moveCharacter = () => {
        let newPosition = characterPosition

        if (isMovingLeft) {
            newPosition = Math.max(newPosition - 10, 0)
        }

        if (isMovingRight) {
            newPosition = Math.min(newPosition + 10, window.innerWidth - 40)
        }

        setCharacterPosition(newPosition)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            setIsMovingLeft(true)
        } else if (event.key === 'ArrowRight') {
            setIsMovingRight(true)
        }

        if (event.key === 'Enter' && isInteractableRef.current) {
            // Interaction logic
            setModal(true)
        }
    }

    const handleKeyUp = (event) => {
        if (event.key === 'ArrowLeft') {
            setIsMovingLeft(false)
        } else if (event.key === 'ArrowRight') {
            setIsMovingRight(false)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    useEffect(() => {
        setInteractionPosition(window.innerWidth - 500)
        const distance = Math.abs(characterPosition - interactionPosition)
        setIsInteractable(distance < 50)
        isInteractableRef.current = isInteractable

        const animationFrame = requestAnimationFrame(() => {
            moveCharacter()
        })

        return () => {
            cancelAnimationFrame(animationFrame)
        }
    }, [characterPosition, isMovingLeft, isMovingRight, interactionPosition])

    return <AppLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        }>
        <Head>
            <title>Laravel - Dashboard</title>
        </Head>

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12">
                <div className={'col-span-5'}>
                    <CardInfo>
                        <h1 className={'label mb-8'}>RoboTech Odyssey,</h1>
                        <span className={'card-line mb-8 w-full block'}/>
                        <p className={'text mb-8'}>As you venture through the virtual lab, you'll learn how sensors serve as the eyes and ears of your robot, enabling it to gather data from the environment and respond to its surroundings. Witness the magic as your robot's senses come alive, detecting everything from colors to temperature changes. Dive into the art of sensor fusion, combining data for a comprehensive understanding of the world.</p>
                        <p className={'text mb-8'}>Get ready to program your robot's interactions and embark on a journey that will shape your understanding of robotics and AI.</p>
                        <h2 className={'label label--orange'}>Use your keyboard arrows to move around</h2>
                    </CardInfo>
                </div>
            </div>
        </div>

        {modal && <div className={'absolute right-80 top-1/3'}>
            <Card>
                <h2 className={'label label--orange mb-4'}>Hello!</h2>
                <p className={'text mb-2'}>Hi there, my name is X2000!%</p>
                <p className={'text mb-2'}>Can you help me find my <span className={'underline'}>sensors?</span></p>
                <p className={'text mb-4'}>My spaceship crashed somewhere and I cant walk anymore</p>
                <Link className={'btn btn--orange'} href={'/missions/ethnics/step-2'}>Can you help me?</Link>
            </Card>
        </div>}

        <GameArea
            characterPosition={characterPosition}
            isInteractable={isInteractable}
            interactionSpotPosition={interactionPosition}
        />
        <div className={'fixed inset-0 bg-blueDark opacity-50 -z-10'}/>
        <div className={'fixed inset-0 bg-cover bg-center -z-20'}
             style={{backgroundImage: `url('/images/game-bg.png')`}}/>
    </AppLayout>
}
