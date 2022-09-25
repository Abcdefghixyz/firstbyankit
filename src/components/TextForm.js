import React, { useState } from 'react'
import './style.css'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert To UpperCase", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert To LowerCase", "success");
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("All Text Cleared", "success");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copy To Clipboard", "success");
    }

    const handleExtraspaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Has Removed", "success");
    }

    const [text, setText] = useState('Enter Text Here');
  return (
    <>
        <div className="container" style={{color:props.mode=== 'dark'?'white': 'black'}}>
            <h1>{props.h1}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"?"#13466e":"white", color:props.mode=== 'dark'?'white': 'black'}} id="myBox" rows="5" ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button type="submit" className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button type="submit" className="btn btn-dark mx-1 my-1" onClick={handleClearClick}>Clear All Text</button>
            <button type="submit" className="btn btn-warning mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button type="submit" className="btn btn-danger mx-1 my-1" onClick={handleExtraspaces}>Remove Extra Space</button>
        </div>
        <div className="container my-5" style={{color:props.mode=== 'dark'?'white': 'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length}charcters</p>
            <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Mintue Take For Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
