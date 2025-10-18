import { PreviewButton } from "./components/PreviewButton";
import { GeneralInfoPreview } from "./components/GeneralInfoPreview";
import { EducationPreview } from "./components/EducationPreview";
import { WorkExperiencePreview } from "./components/WorkExperiencePreview";
import "./styles/preview.css";

export function CVPreview({
    data: { generalInfo, education, work },
    handleClick,
}) {
    return (
        <>
            <PreviewButton handleClick={handleClick} />
            <main className="cv-preview">
                <GeneralInfoPreview data={generalInfo} />
                <hr />
                <EducationPreview data={education} />
                <hr />
                <WorkExperiencePreview data={work} />
            </main>
        </>
    );
}
