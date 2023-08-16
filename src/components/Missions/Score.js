import {useIndex, useStore, useUpdate} from 'ra-fetch'
import InternalLink from '@/components/Links/InternalLink'
import {useEffect} from 'react'

export default function Score({mission_id}) {
    const [results, setResults] = useIndex('user_missions', {mission_id: mission_id})

    const [user, setUser, submitUser] = useUpdate('user', {
        points: ''
    })

    useEffect(() => {
        if(!results.loading){
            setUser({
                points: results.data[0].points
            })
        }
    }, [results])

    function handleSubmit(){
        submitUser().then((res) => {
            if(!res.errors.length){
                console.log(res)
            }
        })
    }

    if (results.loading) {
        return <></>
    }

    return <div>
        <p className={'text'}>
            You have gathered <span className={'mx-4 font-bold text-[20px]'}>{results.data[0].points} / 20</span> points
        </p>
        <div className={'flex gap-8 mt-8'}>
            <button className={'btn btn--orange'} onClick={() => handleSubmit()}>Collect points</button>
            <InternalLink href={'/'}>Retry</InternalLink>
        </div>
    </div>
}
