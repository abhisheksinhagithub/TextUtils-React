import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleRClick = () => {
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="11" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleRClick}>Reset</button>
            </div>

            <div className="container my-5">
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter(word => word.length > 0).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
