import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {useStore} from 'ra-fetch'
import Button from '@/components/Button'
import {useState} from 'react'


export default function List({items, question_id, nextQuestion, mission_id, score = false, questionaire = false}) {

    const [choice, setChoice, submitChoice] = useStore('choices.answer', {
        mission_id: mission_id,
        question_id: question_id,
        answer: '',
    })

    const [active, setActive] = useState()

    function handleSubmit(question_id) {
        nextQuestion(question_id)
        submitChoice().then((res) => {
            if (!res.errors.length) {
                console.log(res)
            }
        })
    }

    return <div className={'flex flex-col'}>
        <ul>
            {
                items.map((item, index) => {
                    let color = '';

                    if(active === index) {
                        color = 'card--active'
                    }

                    return <li key={index}
                               className={`${color} card card--mission py-[5px] px-[10px] mb-4 text-white uppercase`}
                               onClick={() => setActive(index)}
                    >

                        {nextQuestion &&
                            <span className={'cursor-pointer block'}
                                  onClick={() => setChoice({answer: item.right})}>{item.value}</span>
                        }

                        {!nextQuestion &&
                            <Link href={item.name === 'Image Generation' ? '/missions/image-generation' : item.name === 'Coding' ? 'missions/code-quiz' : `missions/${item.id}`} className={'flex justify-between items-center'}>
                                {item.name || item.value}
                                {score && <FontAwesomeIcon className={'text-orange'} icon={faStar}/>}
                            </Link>}
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
