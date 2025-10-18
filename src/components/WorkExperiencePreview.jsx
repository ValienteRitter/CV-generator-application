export function WorkExperiencePreview({
    data: { companyName, positionTitle, from, until, responsibilities },
}) {
    return (
        <section className="preview">
            <h1>Work Experience</h1>
            <div className="work-info">
                <div className="date">
                    {from}-{until}
                </div>
                <div className="info">
                    <h2>{companyName}</h2>
                    <p>Position Title: {positionTitle}</p>
                    <div className="responsibilities">
                        <h3>Responsibilities</h3>
                        <ul>
                            {responsibilities.map(({ id, value }) => (
                                <li key={id}>{value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
