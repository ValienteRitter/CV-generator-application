import { useState } from "react";
import { CVForm } from "./CVForm";
import { CVPreview } from "./CvPreview";

export function App() {
    const [isPreview, setPreview] = useState(false);
    const [cvData, setData] = useState({
        generalInfo: {
            name: "",
            email: "",
            phone: "",
        },

        education: {
            schoolName: "",
            major: "",
            skills: [],
            from: "",
            until: "",
        },

        work: {
            companyName: "",
            positionTitle: "",
            responsibilities: [],
            from: "",
            until: "",
        },
    });

    function handleClick() {
        setPreview(!isPreview);
    }

    function handleChange(e, section, key) {
        setData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: e.target.value,
            },
        }));
        console.log(cvData)
    }

    return (
        <>
            {isPreview ? (
                <CVPreview data={cvData} handleClick={handleClick} />
            ) : (
                <CVForm
                    data = {cvData}
                    handleClick={setPreview}
                    handleChange={(e, section,key) => {
                        handleChange(e, section, key);
                    }}
                />
            )}
        </>
    );
}
