export function WorkExperiencePreview({companyName='Acme Corp', position='Software Developer', from='YYYY-YYYY', until='YYYY', responsibilities=['Developing', 'Fixing bugs', 'Updating']}) {
    return (
    <section className="preview">
            <h1>Work Experience</h1>
            <div className="work-info">
                <div className="date">{from}-{until}</div>
                <div className="info">
                    <h2>{companyName}</h2>
                    <p>{position}</p>
                    <div className="responsibilities">
                        <h3>Responsibilities</h3>
                        <ul>
                            {responsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}