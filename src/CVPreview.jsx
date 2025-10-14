import { PreviewButton } from "./components/PreviewButton";
import { GeneralInfoPreview } from "./components/GeneralInfoPreview";
import { EducationPreview } from "./components/EducationPreview";

export function CVPreview({handleClick}) {
    return (
        <>
            <PreviewButton handleClick={handleClick}/>
            <div className="cv-preview">
                <GeneralInfoPreview />
                <hr />
                <EducationPreview />


            </div>
        </>
    )
} 