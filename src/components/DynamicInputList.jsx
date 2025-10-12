import { Input } from "./Input";

export function DynamicInputList({type, handleAdd, handleDelete}) {
    const isEducation = type === 'education' 
    return (
        <div className="dynamic-input-list">
            <button className="add-input" onClick={handleAdd}>+</button>
            <div className="dynamic-input">
                <Input 
                    name={isEducation ? "learned-skill" : "job-responsibilities"}
                    placeholder={isEducation ? "Your skill" : "Your responsibility"}
                />
                <button className="delete-input" onClick={handleDelete}>X</button>
            </div>
        </div>
    )
}