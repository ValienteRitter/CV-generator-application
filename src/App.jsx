import { useState } from "react";
import { CVForm } from './CVForm'
import { CVPreview } from "./CvPreview";


export function App() {
    const [isPreview, setPreview] = useState(false)

    function handleClick() {
        setPreview(!isPreview)
    }


    return (
        <>
            {isPreview ? <CVPreview handleClick={handleClick} /> : <CVForm handleClick={setPreview}/>}
        </>
    );
}

