import { Input } from "./Input";

export function DynamicInputList({type, handleAddItem, data}) {
    const isEducation = type === 'education'

    return (
        <div className="dynamic-input-list">
            <button className="add-input" onClick={(e) => {
                e.preventDefault()
                handleAddItem(type, isEducation ? 'skills' : 'responsibilities')
                }}>+</button>
                {data.map(({id, value}) => <DynamicInput key={id} type={type} />)}
        </div>
    )
}

export function DynamicInput({type}) {
    const isEducation = type === 'education' 
    return (
            <div className="dynamic-input">
                <Input 
                    name={isEducation ? "learned-skill" : "job-responsibilities"}
                    placeholder={isEducation ? "Your skill" : "Your responsibility"}
                />
                <button className="delete-input">X</button>
            </div>
    )
}