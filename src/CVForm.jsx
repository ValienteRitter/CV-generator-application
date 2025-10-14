import { GeneralInfoForm } from "./components/GeneralInfoForm";
import { EducationForm } from "./components/EducationForm";
import { WorkExperienceForm } from "./components/WorkExperienceForm";
import { PreviewButton } from "./components/PreviewButton";
import './styles/form.css'

export function CVForm() {
    return (
        <>
            <PreviewButton />
            <GeneralInfoForm />
            <EducationForm />
            <WorkExperienceForm />
        </>
    )
}

