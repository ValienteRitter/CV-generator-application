import { TextInput } from "./Input";

export function EducationForm() {
    return (
        <section>
            <form>
                <TextInput label='School Name' name='school-name' id='school-name' placeholder='Azerbaijan State University of Oil and Industry' />
                <TextInput label='Major' name='major' id='major' placeholder='Computer Science' />
                <div>
                    <TextInput type='date' label='From' name='from' id='from' />
                    <TextInput type='date' label='Until' name='until' id='until' />
                </div>
            </form>
        </section>
    )
} 