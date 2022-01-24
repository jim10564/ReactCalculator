import React from 'react';
import  "./App.css";

const CalculatorScreen= ({renderNumOne, renderOperator, renderNumTwo}) => {
    return (
        <div className= "calculatorScreen">
        <span>{renderNumOne} </span>
        <span>{renderOperator} </span>
        <span>{renderNumTwo} </span>
        </div>
    )
}

export default CalculatorScreen;