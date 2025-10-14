import { PreviewButton } from "./components/PreviewButton";
import { GeneralInfoPreview } from "./components/GeneralInfoPreview";

export function CVPreview({handleClick}) {
    return (
        <>
            <PreviewButton handleClick={handleClick}/>
            <div className="cv-preview">
                <GeneralInfoPreview />
                <hr />

            </div>
        </>
    )
} 