import { GeneralInfoForm } from "./components/GeneralInfoForm";
import { EducationForm } from "./components/EducationForm";
import { WorkExperienceForm } from "./components/WorkExperienceForm";
import { PreviewButton } from "./components/PreviewButton";
import './styles/form.css'

export function CVForm({handleClick}) {
    return (
        <>
            <PreviewButton handleClick={handleClick}/>
            <div className="cv-form">
                <GeneralInfoForm />
                <EducationForm />
                <WorkExperienceForm />
            </div>
        </>
    )
}

