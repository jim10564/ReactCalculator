import React, { useState } from 'react';
import CalculatorScreen from './CalculatorScreen';
import "./App.css";

const NumberButtons = () => {
    const numberButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
    const actionButtons = ['AC', '='];
    const operators = ['/', 'X', '-', '+'];
    const [numOne, setNumOne] = useState([]);
    const [operator, setOperator] = useState('');
    const [numTwo, setNumTwo] = useState([]);

    const renderNumbers = (button) => {
        if (operator === '') {
            setNumOne(numOne => numOne.concat(button))
        }
        else {
            setNumTwo(numTwo => numTwo.concat(button))
        }
    }

    const arrayToInt = (myArray) => {
        return parseInt(myArray.join(''));
    }

    const clearScreen = () => {
        setNumOne((numOne) => numOne = []);
        setNumTwo(numTwo => numTwo = []);
        setOperator(operator => operator = '');
    }

    const solveEquation = (myOp) => {
        let varOne = arrayToInt(numOne);
        let varTwo = arrayToInt(numTwo);
        let answer = '';
        clearScreen();
        switch (myOp) {
            case '/':
                answer = varOne / varTwo;
                break;
            case 'X':
                answer = varOne * varTwo;
                break;
            case '-':
                answer = varOne - varTwo;
                break;
            case '+':
                answer = varOne + varTwo;
                break;
            default:
                break
        }
        setNumOne(numOne => numOne.concat(answer.toString()));
    }

    const handleAction = (button) => {
        if (button === '=') {
            solveEquation(operator)
        }
        else {
            clearScreen();
        }
    }

    const renderOperator = (opButton) => {
        if (operator === '') {
            setOperator(opButton);
        }
        else {
            solveEquation(operator);
            setOperator(opButton);
        }
    }

    return (
        <div>
            <CalculatorScreen renderNumOne={numOne} renderOperator={operator} renderNumTwo={numTwo} />
            <div className='buttonsContainer'>
                <div className='numberButtonsContainer'>
                    {numberButtons.map(function (num, index) {
                        return <button className='numberButtons' onClick={() => renderNumbers(num)} key={index}>{num}</button>;
                    })}
                </div>
                <div className='operatorButtonContainer'>
                    {operators.map((operator) => (
                        <button className='operatorButtons' onClick={() => renderOperator(operator)}>{operator}</button>))}
                </div>
                <div className='operatorButtonContainer'>
                    {actionButtons.map((actionButton) => (
                        <button className='operatorButtons' onClick={() => handleAction(actionButton)}>{actionButton}</button>))}
                </div>
            </div>
        </div>
    )
};

export default NumberButtons;