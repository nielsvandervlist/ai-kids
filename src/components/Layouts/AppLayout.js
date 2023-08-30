import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Header from '@/components/Navigation/Header'
import BottomNav from '@/components/Navigation/BottomNav'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    const router = useRouter()
    const removeNav = router.pathname === '/missions/ethnics/game';

    return (
        <div className="min-h-screen relative flex flex-col overflow-x-hidden">
            {/*<Navigation user={user} />*/}

            {/* Page Heading */}
            <Header user={user}/>
            {/* Page Content */}
            <main>{children}</main>
            {!removeNav && <>
            <div className={'fixed right-20 bottom-10 text-center'}>
                {user?.profile_img && <Link href={'/status'}>
                    <Image className={'mb-4'} width={100} height={200} src={user.profile_img} alt={'profile'}/>
                    <p className={'label label--orange'}>Profile</p>
                </Link>}
            </div>
            <div className={'fixed left-20 bottom-10 text-center'}>
                <Link href={'/badges'}>
                    <Image className={'mb-4'} width={100} height={200} src={'/images/badge-1.png'} alt={'profile'}/>
                    <p className={'label label--orange'}>Badges</p>
                </Link>
            </div>
                </>}
        </div>
    )
}

export default AppLayout
