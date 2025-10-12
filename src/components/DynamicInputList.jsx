import { Input } from "./Input";

export function DynamicInputList({type, handleAdd, handleDelete}) {
    const isEducation = type === 'education' 
    return (
        <div>
            <button className="add-input" onClick={handleAdd}>+</button>
            <div>
                <Input 
                    name={isEducation ? "learned-skill" : "job-responsibilities"}
                    placeholder={isEducation ? "Your skill" : "Your responsibility"}
                />
                <button onClick={handleDelete}>X</button>
            </div>
            <div>
                <Input />
                <button>X</button>
            </div>
        </div>
    )
}