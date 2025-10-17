import { Input } from "./Input";
import { DateInput } from "./DateInput";
import { DynamicInputList } from "./DynamicInputList";

export function EducationForm({handleChange}) {
    return (
        <section className="form">
            <h2>Your Education</h2>
            <form>
                <Input label='School Name' name='school-name' id='school-name' placeholder='Azerbaijan State University of Oil and Industry' handleChange={(e) => handleChange(e, 'education','schoolName')}/>
                <Input label='Major' name='major' id='major' placeholder='Computer Science' handleChange={(e) => handleChange(e, 'education','major')}/>
                <DynamicInputList type='education'/>
                <DateInput />
            </form>
        </section>
    )
} 