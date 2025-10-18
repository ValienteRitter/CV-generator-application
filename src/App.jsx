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
            skills: [{id: crypto.randomUUID(), value: ''}],
            from: "",
            until: "",
        },

        work: {
            companyName: "",
            positionTitle: "",
            responsibilities: [{id: crypto.randomUUID(), value: ''}],
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

    function addItem(section, key) {
        setData(prev => (
            {
                ...prev,
                [section]: {
                    ...prev[section],
                    [key]: [
                        ...prev[section][key],
                        {id: crypto.randomUUID(), value: ''}
                    ]
                }
            }
        ))
        console.log(cvData)
    }

    function removeItem(section, key, id) {
        const updatedArr = cvData[section][key].filter(item => item.id !== id)
        setData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: [
                    ...updatedArr
                ]
            }
        }))
    }

    function updateItem(e, section, key, id) {
        const updatedArr = cvData[section][key].map(item => {
            if(item.id === id) {
                return {...item, value: e.target.value}
            }
                return item
        })

        setData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: [
                    ...updatedArr
                ]
            }
        }))
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
                    handleAddItem={addItem}
                    handleRemoveItem={removeItem}
                    handleUpdateItem={updateItem}
                />
            )}
        </>
    );
}
