import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {useStore} from 'ra-fetch'
import Button from '@/components/Button'
import {useState} from 'react'


export default function PuzzelList({
                                       items,
                                       question_id,
                                       nextQuestion,
                                       mission_id,
                                       questionaire = false,
                                   }) {

    const [choice, setChoice, submitChoice] = useStore('choices.answer', {
        mission_id: mission_id,
        answer: '',
    })

    function handleChoice(choice){
        const answer = items.filter((item) => item.value === choice)
        setChoice({
            answer: answer[0].right
        })
    }

    const [active, setActive] = useState()
    const puzzleAnswers = ['triangle', 'circle', 'square']

    function handleSubmit(question_id) {
        nextQuestion(question_id)
        submitChoice().then((res) => {
            if (!res.errors.length) {
                console.log(res)
            }
        })
    }

    return <div className={'flex flex-col'}>
        <ul className={'flex gap-8'}>
            {
                items.map((item, index) => {
                    return <li
                        key={index}
                        className={`card card--puzzle`}
                    >
                        {
                            nextQuestion &&
                            <span
                                className={`cursor-pointer block ${item.value}`}
                            />
                        }
                    </li>
                })
            }
            <li className={'card card--puzzle'}><span>?</span></li>
        </ul>
        <p className={'text my-4'}>Choose one of the following options:</p>
        <ul className={'flex gap-8'}>
            {
                puzzleAnswers.map((item, index) => {
                    let color = ''

                    if (active === index) {
                        color = 'active'
                    }

                    return <li
                        key={index}
                        className={`${color} card card--puzzle`}
                        onClick={() => setActive(index)}
                    >
                        <span
                            className={`cursor-pointer block ${item}`}
                            onClick={() => handleChoice(item)}
                        />
                    </li>
                })
            }
        </ul>

        {
            questionaire &&
            <button onClick={() => handleSubmit(question_id)} className={'btn btn--orange ml-auto mt-8'}>next
                question</button>
        }
    </div>
}
