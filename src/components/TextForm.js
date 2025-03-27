import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to UpperCase','success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to LowerCase','success')
    }

    const handleCopy = () => {

        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert('Text Copied','success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/) // Split on one or more whitespace characters
        setText(newText.join(" ")) // Join with a single space
        props.showAlert('Removed extra spaces successfully','success')
    }

    const handleRevClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert('Reversed every word','success')
    }

    const handleRClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert('Cleared Completely','success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
        
    }


    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="11" value={text} onChange={handleOnChange} 
                    style={{ backgroundColor: props.mode === 'dark' ? '#002147' : 'white' ,color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleRevClick}>Reverse</button>
                <button className="btn btn-primary mx-2" onClick={handleRClick}>Reset</button>
            </div>

            <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter(word => word.length > 0).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
