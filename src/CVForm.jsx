import { GeneralInfoForm } from "./components/GeneralInfoForm";
import { EducationForm } from "./components/EducationForm";
import { WorkExperienceForm } from "./components/WorkExperienceForm";
import { PreviewButton } from "./components/PreviewButton";
import './styles/form.css'

export function CVForm({handleClick, handleChange, data: {generalInfo, education, work}}) {
    return (
        <>
            <PreviewButton handleClick={handleClick}/>
            <main className="cv-form">
                <GeneralInfoForm handleChange={handleChange} data={generalInfo}/>
                <EducationForm handleChange={handleChange} data={education}/>
                <WorkExperienceForm handleChange={handleChange} data={work}/>
            </main>
        </>
    )
}

