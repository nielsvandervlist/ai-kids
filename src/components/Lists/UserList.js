import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {useStore} from 'ra-fetch'
import Button from '@/components/Button'
import {useState} from 'react'


export default function UserList({users}) {

    return <div className={'flex flex-col'}>
        <ul>
            {
                users.map((item, index) => {

                    return <li key={index}
                               className={`card card--mission py-[5px] px-[10px] mb-4 text-white uppercase flex`}
                        >
                        <span className={'mr-4'}>{index + 1}</span>
                        <span>{item.name}</span>
                        <span className={'ml-auto'}>{item.points}</span>
                    </li>
                })
            }
        </ul>
    </div>
}
