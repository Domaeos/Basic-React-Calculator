function OperatorButton({ operation, setCurrentFormula }) {
    function updateFormula() {
        setCurrentFormula((currentFormula) => {
            if (currentFormula.length) {
                if (operation === "C") {
                    return [];
                }
                if (operation === "+/-") {
                    if (/\d/.test(currentFormula.at(-1))) {
                        if (currentFormula.at(-1)[0][0] === "-") {
                            const returnArray = [...currentFormula];
                            returnArray[returnArray.length - 1] = [returnArray.at(-1).slice(1)]
                            return returnArray;
                        } else {
                            const returnArray = [...currentFormula];
                            returnArray[returnArray.length - 1] = "-" + returnArray.at(-1);
                            return returnArray;
                        }
                    } else {
                        const returnArray = [...currentFormula];
                        returnArray.push("-0");
                        return returnArray;
                    }
                }
                if (operation === "%") {
                    const returnArray = [...currentFormula]
                    let lastIndex = returnArray.findLastIndex(value => /\d/.test(value))
                    returnArray[lastIndex] = returnArray[lastIndex] / 100;
                    return returnArray;
                }
                if (operation === "=") {
                    return [eval(currentFormula.join("")).toString()]
                }
                return [...currentFormula].concat([operation]);
            } else {
                if (operation === "+/-") {
                    const returnArray = [...currentFormula]
                    returnArray.push("-0");
                    return returnArray;
                }
            }
            return currentFormula;
        })
    }
    return (
        <button onClick={() => updateFormula()} className={
            "button-operation" + ((operation === "=") ? " button-span" : "")
        }>{operation}</button>
    )
}

export default OperatorButton;