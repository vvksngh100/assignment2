import React from "react";
import './Button.css'

export default function Button(props){
    const {type, title, handleClick} = props;
    return (
        <div>
            <button type={type} onClick={handleClick}>{title}</button>
        </div>
    )
}