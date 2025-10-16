import { PreviewButton } from "./components/PreviewButton";
import { GeneralInfoPreview } from "./components/GeneralInfoPreview";
import { EducationPreview } from "./components/EducationPreview";
import { WorkExperiencePreview } from "./components/WorkExperiencePreview";
import './styles/preview.css'

export function CVPreview({handleClick}) {
    return (
        <>
            <PreviewButton handleClick={handleClick}/>
            <main className="cv-preview">
                <GeneralInfoPreview />
                <hr />
                <EducationPreview />
                <hr />
                <WorkExperiencePreview />

            </main>
        </>
    )
} 