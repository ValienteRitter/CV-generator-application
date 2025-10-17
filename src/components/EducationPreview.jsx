export function EducationPreview({data: {schoolName, major, from, until, skills}}) {
    return (
        <section className="preview">
            <h1>Education</h1>
            <div className="education-info">
                <div className="date">{from}-{until}</div>
                <div className="info">
                    <h2>{schoolName}</h2>
                    <p>Major Title: {major}</p>
                    <div className="learned-skills">
                        <h3>Learned Skills</h3>
                        <ul>
                            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}