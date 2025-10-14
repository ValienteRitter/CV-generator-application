import { GeneralInfoForm } from "./components/GeneralInfoForm";
import { EducationForm } from "./components/EducationForm";
import { WorkExperienceForm } from "./components/WorkExperienceForm";
import { PreviewButton } from "./components/PreviewButton";
import './styles/form.css'

export function CVForm({handleClick}) {
    return (
        <>
            <PreviewButton handleClick={handleClick}/>
            <main className="cv-form">
                <GeneralInfoForm />
                <EducationForm />
                <WorkExperienceForm />
            </main>
        </>
    )
}

