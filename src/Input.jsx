import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";

function Input({ setCurrentFormula }) {
    return (
        <>
            <div className="button-container">
                <div className="row-1">
                    <OperatorButton operation="C" setCurrentFormula={setCurrentFormula} />
                    <OperatorButton operation="+/-" setCurrentFormula={setCurrentFormula} />
                    <OperatorButton operation="%" setCurrentFormula={setCurrentFormula} />
                    <OperatorButton operation="/" setCurrentFormula={setCurrentFormula} />
                </div>
                <div className="row-2">
                    <NumberButton num={7} setCurrentFormula={setCurrentFormula} />
                    <NumberButton num={8} setCurrentFormula={setCurrentFormula} />
                    <NumberButton num={9} setCurrentFormula={setCurrentFormula} />
                    <OperatorButton operation="*" setCurrentFormula={setCurrentFormula}/>
                </div>
                <div className="row-3">
                    <NumberButton num={4} setCurrentFormula={setCurrentFormula} />
                    <NumberButton num={5} setCurrentFormula={setCurrentFormula} />
                    <NumberButton num={6} setCurrentFormula={setCurrentFormula} />
                    <OperatorButton operation="-" setCurrentFormula={setCurrentFormula}/>
                </div>
                <div className="row-4">
                    <NumberButton num={1} setCurrentFormula={setCurrentFormula} />
                    <NumberButton num={2} setCurrentFormula={setCurrentFormula} />
                    <NumberButton num={3} setCurrentFormula={setCurrentFormula} />
                    <OperatorButton operation="+" setCurrentFormula={setCurrentFormula}/>
                </div>
                <div className="row-5">
                    <NumberButton num={0} setCurrentFormula={setCurrentFormula} />
                    <NumberButton num="." setCurrentFormula={setCurrentFormula} />
                    {/* <OperatorButton operation="<" setCurrentFormula={setCurrentFormula} /> */}
                    <OperatorButton operation="=" setCurrentFormula={setCurrentFormula} />
                </div>
            </div>
        </>
    )
}

export default Input;