import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Header from '@/components/Navigation/Header'
import BottomNav from '@/components/Navigation/BottomNav'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen relative">
            {/*<Navigation user={user} />*/}

            {/* Page Heading */}
            <Header/>
            {/* Page Content */}
            <main>{children}</main>
            <BottomNav/>
        </div>
    )
}

export default AppLayout
