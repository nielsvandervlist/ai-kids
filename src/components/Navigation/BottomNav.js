import Image from 'next/image'
import menuOne from '../../../public/images/menu-1.svg'
import menuTwo from '../../../public/images/menu-2.svg'
import menuThree from '../../../public/images/menu-3.svg'
import menuFour from '../../../public/images/menu-4.svg'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function BottomNav(){

    const router = useRouter()

    const menuItems = [
        { label: 'Missions', href: '/dashboard', image: menuOne },
        { label: 'Explore', href: '/explore', image: menuTwo },
        { label: 'Create', href: '/create', image: menuThree },
        { label: 'Status', href: '/status', image: menuFour },
    ];

    // Function to check if a menu item is active
    const isActiveMenuItem = (href) => {
        return router.pathname === href;
    };

    return <nav className={'bottom-nav w-full flex justify-center absolute bottom-10'}>
        <ul className={'flex gap-10'}>
            {
                menuItems.map((item, index) => {
                    return <li key={index}>
                        <Link className={isActiveMenuItem(item.href) ? 'text-center inline-block active' : 'text-center inline-block'} href={item.href}>
                            <figure className={'overflow-hidden rounded-full mb-4'}>
                                <Image src={item.image} alt={'menu'}/>
                            </figure>
                            <span className={'label text-white'}>{item.label}</span>
                        </Link>
                    </li>
                })
            }
        </ul>
    </nav>
}
