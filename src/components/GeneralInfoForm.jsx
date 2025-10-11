import { Input } from "./Input"

export function GeneralInfoForm() {
    return (
        <section>
            <h1>General Information</h1>
            <form>
                <Input label='Name' name='name' placeholder='John Doe' />
                <Input type="email" label='Email' name='email' placeholder='johndoe@email.com' />
                <Input type="tel" pattern='^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$' label='Phone Number' name='number' placeholder='xxx-xxx-xx-xx' />
            </form>
        </section>
    )
}
