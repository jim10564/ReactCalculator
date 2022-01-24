import NumberButtons from './NumberButtons';
import "./App.css";

const CalculatorBody = () => {
    return (
       <div className='outerContainer'>
            <div>
          </div>
            <div className="calculatorBody">
                <br></br>
                <NumberButtons/>
                <br></br>
            </div>
            <p></p>
        </div>
    )
    
}


export default CalculatorBody;