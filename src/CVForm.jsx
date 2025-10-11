import { GeneralInfoForm } from "./components/GeneralInfoForm";
import { EducationForm } from "./components/EducationForm";
import { WorkExperienceForm } from "./components/WorkExperienceForm";

export function CVForm() {
    return (
        <>
            <GeneralInfoForm />
            <EducationForm />
            <WorkExperienceForm />
        </>
    )
}

