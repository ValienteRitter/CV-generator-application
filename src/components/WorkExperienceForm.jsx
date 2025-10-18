import { DateInput } from "./DateInput";
import { Input } from "./Input";
import { DynamicInputList } from "./DynamicInputList";

export function WorkExperienceForm({handleChange, data: {companyName,positionTitle, responsibilities}, handleAddItem, handleRemoveItem}) {
    return (
        <section className="form">
            <h2>Work Experience</h2>
            <form>
                <Input value={companyName} label='Company Name' name='company-name' id='company-name' placeholder='Acme Corp' handleChange={(e) => handleChange(e, 'work','companyName')}/>
                <Input value={positionTitle} label='Position Title' name='position-title' id='position-title' placeholder='Software Developer' handleChange={(e) => handleChange(e, 'work','positionTitle')}/>
                <DynamicInputList type='work' data={responsibilities} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem}/>
                <DateInput />
            </form>
        </section>
    )
}