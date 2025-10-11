import { TextInput } from "./Input";

export function EducationForm() {
    return (
        <section>
            <form>
                <TextInput label='School Name' name='school-name' id='school-name' placeholder='Azerbaijan State University of Oil and Industry' />
                <TextInput label='Major' name='major' id='major' placeholder='Computer Science' />
                <div>
                    <TextInput pattern='^(19|20)\d{2}$' label='From' name='from' id='from' placeholder='YYYY' />
                    <TextInput pattern='^(19|20)\d{2}$' label='Until' name='until' id='until' placeholder='YYYY' />
                </div>
            </form>
        </section>
    )
} 