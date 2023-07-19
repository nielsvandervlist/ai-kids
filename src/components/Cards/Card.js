import clsx from 'clsx'

export default function Card({children, className}){
    return <div className={clsx('card card--purple', className)}>
        {children}
    </div>
}
