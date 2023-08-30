import clsx from 'clsx'

export default function Card({children, className, onClick}){
    return <div className={clsx('card card--purple', className)} onClick={onClick}>
        {children}
    </div>
}
