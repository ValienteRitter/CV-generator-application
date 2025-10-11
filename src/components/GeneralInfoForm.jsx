import { TextInput } from "./TextInput"

export function GeneralInfoForm() {
    return (
        <section>
            <h1>General Information</h1>
            <form>
                <TextInput label='Name' name='name' placeholder='John Doe' />
                <TextInput type="email" label='Email' name='email' placeholder='johndoe@email.com' />
                <TextInput type="tel" pattern='^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$' label='Phone Number' name='number' placeholder='xxx-xxx-xx-xx' />
            </form>
        </section>
    )
}
