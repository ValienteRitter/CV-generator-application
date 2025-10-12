import { GeneralInfoForm } from "./components/GeneralInfoForm";
import { EducationForm } from "./components/EducationForm";
import { WorkExperienceForm } from "./components/WorkExperienceForm";
import './styles/form.css'

export function CVForm() {
    return (
        <>
            <GeneralInfoForm />
            <EducationForm />
            <WorkExperienceForm />
        </>
    )
}

