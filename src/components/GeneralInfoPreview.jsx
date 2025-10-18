export function GeneralInfoPreview({ data: { name, email, phone } }) {
    return (
        <section className="preview">
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </section>
    );
}
