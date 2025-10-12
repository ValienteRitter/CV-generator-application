import { Input } from "./Input";
import { DateInput } from "./DateInput";
import { DynamicInputList } from "./DynamicInputList";

export function EducationForm() {
    return (
        <section className="form">
            <h2>Your Education</h2>
            <form>
                <Input label='School Name' name='school-name' id='school-name' placeholder='Azerbaijan State University of Oil and Industry' />
                <Input label='Major' name='major' id='major' placeholder='Computer Science' />
                <DynamicInputList type='education'/>
                <DateInput />
            </form>
        </section>
    )
} 