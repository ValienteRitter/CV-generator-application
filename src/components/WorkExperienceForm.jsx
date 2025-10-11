import { Input } from "./Input";

export function WorkExperienceForm() {
    return (
        <section>
            <h2>Work Experience</h2>
            <form>
                <Input label='Company Name' name='company-name' id='company-name' placeholder='Acme Corp' />
                <Input label='Position Title' name='position-title' id='position-title' placeholder='Software Developer' />
                <div>
                    <Input pattern='^(19|20)\d{2}$' label='From' name='from' id='from' placeholder='YYYY' />
                    <Input pattern='^(19|20)\d{2}$' label='Until' name='until' id='until' placeholder='YYYY' />
                </div>
            </form>
        </section>
    )
}