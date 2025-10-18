import { Input } from "./Input";

export function DynamicInputList({type, handleAddItem, data, handleRemoveItem, handleUpdateItem}) {
    const isEducation = type === 'education'

    return (
        <div className="dynamic-input-list">
            <button className="add-input" onClick={(e) => {
                e.preventDefault()
                handleAddItem(type, isEducation ? 'skills' : 'responsibilities')
                }}>+</button>
                {data.map(({id, value}) => <DynamicInput value={value} key={id} type={type} handleRemoveItem={() => handleRemoveItem(type, isEducation ? 'skills' : 'responsibilities', id)} handleUpdateItem={(e) => handleUpdateItem(e, type, isEducation ? 'skills' : 'responsibilities', id)}/>)}
        </div>
    )
}

export function DynamicInput({type, handleRemoveItem, handleUpdateItem, value}) {
    const isEducation = type === 'education' 
    return (
            <div className="dynamic-input">
                <Input 
                    name={isEducation ? "learned-skill" : "job-responsibilities"}
                    placeholder={isEducation ? "Your skill" : "Your responsibility"}
                    handleChange={handleUpdateItem}
                    value={value}
                />
                <button className="delete-input" onClick={handleRemoveItem}>X</button>
            </div>
    )
}