import { PreviewButton } from "./components/PreviewButton";
import { GeneralInfoPreview } from "./components/GeneralInfoPreview";
import { EducationPreview } from "./components/EducationPreview";
import { WorkExperiencePreview } from "./components/WorkExperiencePreview";

export function CVPreview({handleClick}) {
    return (
        <>
            <PreviewButton handleClick={handleClick}/>
            <div className="cv-preview">
                <GeneralInfoPreview />
                <hr />
                <EducationPreview />
                <hr />
                <WorkExperiencePreview />

            </div>
        </>
    )
} 