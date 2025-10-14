export function GeneralInfoPreview({name="John Doe", email="johndoe@gmail.com", phone="xxx-xxx-xx-xx"}) {
    return (
        <section className="preview"> 
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </section>
    )  
}