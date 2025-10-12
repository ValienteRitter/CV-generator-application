import { DateInput } from "./DateInput";
import { Input } from "./Input";

export function WorkExperienceForm() {
    return (
        <section className="form">
            <h2>Work Experience</h2>
            <form>
                <Input label='Company Name' name='company-name' id='company-name' placeholder='Acme Corp' />
                <Input label='Position Title' name='position-title' id='position-title' placeholder='Software Developer' />
                <DateInput />
            </form>
        </section>
    )
}