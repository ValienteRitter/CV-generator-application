import { Input } from "./Input";

export function GeneralInfoForm({
    handleChange,
    data: { name, email, phone },
}) {
    return (
        <section className="form">
            <h2>General Information</h2>
            <form>
                <Input
                    label="Name"
                    name="name"
                    placeholder="John Doe"
                    handleChange={(e) => handleChange(e, "generalInfo", "name")}
                    value={name}
                />
                <Input
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="johndoe@email.com"
                    handleChange={(e) =>
                        handleChange(e, "generalInfo", "email")
                    }
                    value={email}
                />
                <Input
                    type="tel"
                    pattern="^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$"
                    label="Phone Number"
                    name="number"
                    placeholder="xxx-xxx-xx-xx"
                    handleChange={(e) =>
                        handleChange(e, "generalInfo", "phone")
                    }
                    value={phone}
                />
            </form>
        </section>
    );
}
