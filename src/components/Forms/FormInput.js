export default function FormInput({value, type, name, placeholder, autoComplete, required, onChange}){
    return <input
        className={'card card--mission py-[5px] px-[10px] mb-4 text-white uppercase w-full mb-8 inline-block'}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
    />
}
