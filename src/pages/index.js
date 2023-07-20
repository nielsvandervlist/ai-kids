import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import InternalLink from '@/components/Links/InternalLink'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ? (
                        <InternalLink
                            href="/dashboard"
                            className="ml-4">
                            Dashboard
                        </InternalLink>
                    ) : (
                        <>
                            <InternalLink
                                href="/login"
                            >
                                Login
                            </InternalLink>

                            <InternalLink
                                href="/register"
                                className="ml-4">
                                Register
                            </InternalLink>
                        </>
                    )}
                </div>
                <div className={'fixed inset-0 w-full bg-blueDark opacity-80 -z-10'}/>
                <div className={'fixed inset-0 bg-cover -z-20'} style={{backgroundImage: `url('images/bg-explorer.png')`}}/>
            </div>
        </>
    )
}
