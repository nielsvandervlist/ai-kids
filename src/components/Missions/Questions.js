import {useIndex} from 'ra-fetch'
import Card from '@/components/Cards/Card'
import {useEffect, useState} from 'react'
import SubmitButton from '@/components/Links/SubmitButton'
import Choices from '@/components/Missions/Choices'
import InternalLink from '@/components/Links/InternalLink'

export default function Questions({mission_id}) {

    const [questions, setQuestions] = useIndex('questions', {mission_id: mission_id})
    const [done, setDone] = useState(false)
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [questionId, setQuestionId] = useState()

    useEffect(() => {
        if(!questions.loading && questionId !== questions.data[0].id){
            setQuestionId(questions.data[0].id)
        }
    }, [questions])

    if (questions.loading || !questionId) {
        return <></>
    }

    function nextQuestion(value, answer) {
        setQuestionId(questionId + 1)
        setActiveQuestion(value)
        if(activeQuestion === questions.data.length - 1){
            setDone(true)
        }
    }

    return <div>
        <Card>

            <h1 className={'label label--orange mb-6'}>Mission: {mission_id}</h1>
            {
                questions.data.map((question, index) => {
                    if (activeQuestion !== index) {
                        return <div key={index}></div>
                    }
                    return <div key={index}>
                        <p className={'text uppercase mb-8'}>{question.value}?</p>
                        <div className={'mb-8'}>
                            <Choices mission_id={mission_id} question_id={questionId} nextQuestion={nextQuestion}/>
                        </div>
                    </div>

                })
            }
            {
                done && <div>
                    <h1 className={'label mb-8'}>You are done with the questionaire</h1>
                    <span className={'card-line mb-8 w-full block'}/>
                    <p className={'text mb-8'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <InternalLink href={'/'}>Show results</InternalLink>
                </div>
            }
        </Card>
    </div>
}
