import Link from 'next/link'
import clsx from 'clsx'

export default function InternalLink({href, children, className}){
    return <Link className={clsx('btn btn--orange', className)} href={href}>{children}</Link>
}
