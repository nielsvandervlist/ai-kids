import Image from 'next/image'
import menuOne from '../../../public/images/menu-1.png'
import menuTwo from '../../../public/images/menu-2.png'
import menuThree from '../../../public/images/menu-3.png'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function BottomNav(){

    const router = useRouter()

    const menuItems = [
        { label: 'Missions', href: '/dashboard', image: menuOne },
        { label: 'Explore', href: '/explore', image: menuTwo },
        { label: 'Create', href: '/create', image: menuThree },
    ];

    // Function to check if a menu item is active
    const isActiveMenuItem = (href) => {
        return router.pathname === href;
    };

    return <nav className={'bottom-nav w-full flex justify-center absolute mt-auto top-4'}>
        <ul className={'flex gap-10'}>
            {
                menuItems.map((item, index) => {
                    return <li key={index}>
                        <Link className={isActiveMenuItem(item.href) ? 'flex flex-col text-center active h-full' : 'flex flex-col text-center inline-block h-full'} href={item.href}>
                            <figure className={'overflow-hidden rounded-full mb-2'}>
                                <Image width={80} height={80} src={item.image} alt={'menu'}/>
                            </figure>
                            <span className={'label text-white mt-auto'}>{item.label}</span>
                        </Link>
                    </li>
                })
            }
        </ul>
    </nav>
}
