import React from "react";
import { useState } from "react";
import Output from "./Output";
import Input from "./Input";
import "./App.css"

function App() {
    const [currentFormula, setCurrentFormula] = useState([]);
    console.log(currentFormula);
    const states = {
        currentFormula,
        setCurrentFormula
    }
    return (
        <>
            <div className="page-grid">
                <div className="calculator-container">
                    <Output currentFormula={currentFormula} />
                    <Input setCurrentFormula={setCurrentFormula} />
                </div>
            </div>
        </>
    )
}

export default App;