import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function List({items, score = false, questionaire = false}){
    return <ul>
        {
            items.map((item, index) => {
                return <li key={index} className={'card card--mission py-[5px] px-[10px] mb-4 text-white uppercase'}>
                    <Link href={`missions/${item.id}`} className={'flex justify-between items-center'}>
                        {item.name || item.value}
                        {score && <FontAwesomeIcon className={'text-orange'} icon={faStar}/>}
                    </Link>
                </li>
            })
        }
    </ul>
}
