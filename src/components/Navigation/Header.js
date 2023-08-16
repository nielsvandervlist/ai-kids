import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAstronaut, faStar} from '@fortawesome/free-solid-svg-icons'
import {useAuth} from '@/hooks/auth'

export default function Header({user}){

    const { logout } = useAuth()

    return <header className={'flex p-10 items-center justify-between text-white'}>
        <div className={'flex gap-8'}>
            <FontAwesomeIcon className={'text-[24px] text-orange'} icon={faUserAstronaut}/>
            <button onClick={() => logout()}>logout</button>
        </div>
        <span className={'label'}>Ai for kids</span>
        <div className={'flex gap-4 items-center'}>
            <span className={'label'}>{user?.points} points</span>
            <FontAwesomeIcon className={'text-[24px] text-orange'} icon={faStar}/>
        </div>
    </header>
}
