import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import GameArea from '@/components/Ethnics/GameArea'
import {useEffect, useRef, useState} from 'react'
import Card from '@/components/Cards/Card'
import Button from '@/components/Button'
import CardInfo from '@/components/Cards/CardInfo'
import InternalLink from '@/components/Links/InternalLink'

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

        {modal && <div className={'absolute right-80 top-1/3'}>
            <Card>
                <h2 className={'label label--orange mb-4'}>Hello!</h2>
                <p className={'text mb-2'}>Hi there, my name is X2000!%</p>
                <p className={'text mb-2'}>Can you help me find my <span className={'underline'}>sensors?</span></p>
                <p className={'text mb-4'}>My spaceship crashed somewhere and I cant walk anymore</p>
                <button className={'btn btn--orange'}>Can you help me?</button>
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
