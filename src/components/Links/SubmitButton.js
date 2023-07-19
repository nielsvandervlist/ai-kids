export default function SubmitButton({id, children, onClick}){
    return <button className={'btn btn--orange w-full'} onClick={onClick} id={id}>{children}</button>
}
