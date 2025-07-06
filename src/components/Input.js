import React from "react";
import './Input.css'

export default function Input(props){
    const {id, name, inputTitle, value, type, handleChange} = props;
    return (
        <div className="input">
            <label htmlFor={id}>{inputTitle}</label>
            <input type={type} id={id} name={name} value={value} onChange={handleChange}/>
        </div>
    )
}