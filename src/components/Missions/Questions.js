import {useIndex, useStore} from 'ra-fetch'
import Card from '@/components/Cards/Card'
import {useEffect, useState} from 'react'
import Choices from '@/components/Missions/Choices'
import InternalLink from '@/components/Links/InternalLink'
import {useRouter} from 'next/router'

export default function Questions({mission_id, user}) {

    const router = useRouter()
    const [questions, setQuestions] = useIndex('questions', {mission_id: mission_id})
    const [done, setDone] = useState(false)
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [questionId, setQuestionId] = useState()
    const [userMission, setUserMission] = useIndex('user_missions', {
        mission_id: mission_id
    })

    console.log(userMission)

    useEffect(() => {
        if(!questions.loading && questionId !== questions.data[0].id){
            setQuestionId(questions.data[0].id)
        }
    }, [questions])

    if (questions.loading || !questionId) {
        return <></>
    }

    if(done){
        router.push({
            pathname: `${mission_id}/results`,
            query: {user_mission_id: userMission.data[0].id}
        })
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
        </Card>
    </div>
}
