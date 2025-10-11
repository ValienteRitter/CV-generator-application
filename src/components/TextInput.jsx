export function TextInput({label, name, type='text', ...inputProps}) {
    return (
        <div className="inputText">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} {...inputProps}/>
        </div>
    )
}