import {useDelete, useIndex, useStore, useUpdate} from 'ra-fetch'
import {useRouter} from 'next/router'

export default function Score({mission_id, user_mission_id}) {
    const router = useRouter()
    const [results, setResults] = useIndex('user_missions', {mission_id: mission_id})

    const [deleteUserMission, submitDeleteUserMission] = useDelete('user_missions', {id: user_mission_id})
    const [user, setUser, submitUser] = useUpdate('user.points')

    function handleSubmit(){
        submitUser().then((res) => {
            if(!res.errors.length){
                router.push({
                    pathname: '/',
                    query: {
                        points: user.data.points
                    }
                })
            }
        })
    }

    function handleDelete(){
        submitDeleteUserMission().then((res) => {
            if(!res.errors.length){
                router.back()
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
            <button className={'btn btn--orange'} onClick={() => handleDelete()}>Retry</button>
        </div>
    </div>
}
