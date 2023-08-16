import {useIndex, useStore} from 'ra-fetch'
import List from '@/components/Lists/List'

export default function Choices({question_id, mission_id, nextQuestion}){

    const [choices, setChoices] = useIndex('choices', {question_id: question_id})

    if(choices.loading){
        return <></>
    }

    return <div className={'mb-8'}>
        <List questionaire items={choices.data} mission_id={mission_id} nextQuestion={nextQuestion} question_id={question_id}/>
    </div>
}
