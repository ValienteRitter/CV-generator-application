import { Input } from "./Input";

export function EducationForm() {
    return (
        <section>
            <h2>Your Education</h2>
            <form>
                <Input label='School Name' name='school-name' id='school-name' placeholder='Azerbaijan State University of Oil and Industry' />
                <Input label='Major' name='major' id='major' placeholder='Computer Science' />
                <div>
                    <Input pattern='^(19|20)\d{2}$' label='From' name='from' id='from' placeholder='YYYY' />
                    <Input pattern='^(19|20)\d{2}$' label='Until' name='until' id='until' placeholder='YYYY' />
                </div>
            </form>
        </section>
    )
} 