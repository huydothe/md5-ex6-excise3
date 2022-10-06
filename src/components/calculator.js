import {useState} from "react";
import React from "react";

function Calculator(){
    const [state, setState] = useState(0);
    let InputNum1 = React.createElement("input",
        {
            id:"num1",
            type : "number"
        });

    let InputNum2 = React.createElement("input",
        {
            id:"num2",
            type : "number"
        });

    let result = React.createElement('p',
        {
            id : "result"
        },
        "...")

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    const addition = () =>{
        let resultAdd = num1 + num2
        return (
            setState(resultAdd)
        )
    }

    const subtraction = () =>{
        let resultAdd = num1 - num2
        return (
            setState(resultAdd)
        )
    }

    const multiple = () =>{
        let resultAdd = num1 * num2
        return (
            setState(resultAdd)
        )
    }

    const division = () =>{
        let resultAdd = num1/num2
        return (
            setState(resultAdd)
        )
    }

    return(
        <div>
            <button onClick={addition}>+</button>
            <button onClick={subtraction}>-</button>
            <button onClick={multiple}>x</button>
            <button onClick={division}>/</button>
        </div>
    )
}

export default Calculator;