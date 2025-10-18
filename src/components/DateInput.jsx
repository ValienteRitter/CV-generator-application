import { Input } from "./Input";

export function DateInput({ type, handleChange, from, until }) {
    return (
        <div className="date-input">
            <Input
                value={from}
                pattern="^(19|20)\d{2}$"
                label="From"
                name="from"
                id="from"
                placeholder="YYYY"
                handleChange={(e) => handleChange(e, type, "from")}
            />
            <Input
                value={until}
                pattern="^(19|20)\d{2}$"
                label="Until"
                name="until"
                id="until"
                placeholder="YYYY"
                handleChange={(e) => handleChange(e, type, "until")}
            />
        </div>
    );
}
