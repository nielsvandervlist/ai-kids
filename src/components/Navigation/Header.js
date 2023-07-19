import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAstronaut, faStar} from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return <header className={'flex p-10 items-center justify-between text-white'}>
        <FontAwesomeIcon className={'text-[24px] text-orange'} icon={faUserAstronaut}/>
        <span className={'label'}>Ai for kids</span>
        <div className={'flex gap-4 items-center'}>
            <span className={'label'}>0: points</span>
            <FontAwesomeIcon className={'text-[24px] text-orange'} icon={faStar}/>
        </div>
    </header>
}
