import { Input } from "./Input";

export function DateInput() {
    return (
        <div className="date-input">
            <Input pattern='^(19|20)\d{2}$' label='From' name='from' id='from' placeholder='YYYY' />
            <Input pattern='^(19|20)\d{2}$' label='Until' name='until' id='until' placeholder='YYYY' />
        </div>
    )
}