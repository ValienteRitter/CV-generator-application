import { DateInput } from "./DateInput";
import { Input } from "./Input";
import { DynamicInputList } from "./DynamicInputList";

export function WorkExperienceForm() {
    return (
        <section className="form">
            <h2>Work Experience</h2>
            <form>
                <Input label='Company Name' name='company-name' id='company-name' placeholder='Acme Corp' />
                <Input label='Position Title' name='position-title' id='position-title' placeholder='Software Developer' />
                <DynamicInputList type='work'/>
                <DateInput />
            </form>
        </section>
    )
}