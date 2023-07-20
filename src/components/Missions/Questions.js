import {useIndex} from 'ra-fetch'
import Card from '@/components/Cards/Card'
import {useEffect, useState} from 'react'
import SubmitButton from '@/components/Links/SubmitButton'
import Choices from '@/components/Missions/Choices'

export default function Questions({mission_id}) {

    const [questions, setQuestions] = useIndex('questions', {mission_id: mission_id})
    const [done, setDone] = useState(false)
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [questionId, setQuestionId] = useState()

    useEffect(() => {
        if(!questions.loading && questionId !== questions.data[0].id){
            setQuestionId(questions.data[0].id)
        }
    }, [questionId, questions])

    if (questions.loading || !questionId) {
        return <></>
    }

    function nextQuestion(value, calc) {

        if(calc === 'plus'){
            setQuestionId(questionId + 1)
        }
        if(calc === 'min'){
            setQuestionId(questionId - 1)
        }
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
                            <Choices question_id={questionId}/>
                        </div>
                    </div>

                })
            }

            <div className={'flex justify-evenly gap-20'}>
                <SubmitButton onClick={() => nextQuestion(activeQuestion - 1, 'minus')}>Previous
                    question</SubmitButton>
                <SubmitButton onClick={() => nextQuestion(activeQuestion + 1, 'plus')}>Next question</SubmitButton>
            </div>

        </Card>
    </div>
}
