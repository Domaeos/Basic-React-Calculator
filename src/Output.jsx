function Output({ currentFormula }) {
    console.log(currentFormula.join(""));
    let display = "0";
    if (currentFormula.length) {
        if (currentFormula.length > 2) {
            if (!currentFormula.length % 2) {
                display = eval(currentFormula.join(""));
            } else {
                if (/\d+/.test(currentFormula.at(-1))) {
                    display = currentFormula.at(-1);
                } else {
                    display = eval(currentFormula.slice(0, -1).join(""))
                }
            }
        } else {
            if (currentFormula.length !== 2) {
                display = currentFormula[0];
            }
        }
    }
    if (!display) {
        display = display.toString().replace(/^0+/, "");
        display = display.toString().replace(/^-0+/, "-");
    }
    return (
        <>
            <div className="total-sum-display">{currentFormula.join}</div>
            <div className="output-display">{display}</div>
        </>
    )
}

export default Output;