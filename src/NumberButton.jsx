function NumberButton({ num, setCurrentFormula }) {
    function updateFormula() {
        setCurrentFormula((currentFormula) => {
            if (currentFormula.length) {
                if (/\d/.test(currentFormula.at(-1))) {
                    const newArray = [...currentFormula]
                    if (num === "." && /\./.test(currentFormula.at(-1))) {
                        return currentFormula;
                    }
                    if (currentFormula.at(-1) === "0" || currentFormula.at(-1) === "-0") {
                        newArray[newArray.length - 1] = newArray.at(-1).replace("0", num);
                        return newArray;
                    }
                    newArray[newArray.length - 1] = [newArray.at(-1) + `${num}`];
                    return newArray;
                } else {
                    return [...currentFormula].concat([`${num}`]);
                }
            } else {
                if (num === ".") {
                    return [["0."]]
                }
                return [[`${num}`]];
            }
        })
    }
    return (
        <button onClick={() => updateFormula()} className="button-number">{num}</button>
    )
}

export default NumberButton;