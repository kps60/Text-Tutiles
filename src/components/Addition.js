import React, { useState } from 'react';
import '../components/Addition.css';

export default function Addition(props) {
  const [text, setText] = useState('');
  const changeUpCase = () => {
    // console.log('Upper case was clicked');
    if(text.length===0){
      console.log('');
    }
    else{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text converted to upper case","success");
    }
  }
  const handleOnChange = (event) => {
    console.log('on change');
    setText(event.target.value);
  }
  
  // text="krishna is hee";//wrong way to change state
  // setText("hello world");//correct way
  const changeLoCase = () => {
    if(text.length===0){
      console.log('');
    }
    else{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text converted to Lower case","success");
    }
  }
  const changeCoCase = () => {
    if(text.length===0){
      console.log('');
    }
    else{
    //document.getElementById(id).style.property = new style
    document.getElementById('Mybox').style.color="red";
    props.showAlert("text converted to red color","success");
    // let newText=event.target.value()
    // console.log(newText);
    // newText.style.color='primary-red';
    // setText();
    }
  }
  // cradits to A
  const handleCopy = () => {
    if(text.length===0){
      console.log('');
    }
    else{
    console.log("I am copyed");
    let text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text have been copied","success");
    }
  }
  const handleExtraSpaces = () => {
    if(text.length===0){
      console.log('');
    }
    else{
    let newtext = text.split(/[  ]+/);
    setText(newtext.join(' '));
    props.showAlert("text have been removed extra spaces","success");
    }
  }
  return (
    <div>
      <div className={`mb-3 container text-${props.mode==='light'?'black':'light'}`}>
        <h2>{props.heading}</h2>
        <textarea className='form-control ' style={props.mode==='dark'?{backgroundColor:'#090942'}:{backgroundColor:'white'}} value={text} id="Mybox" onChange={handleOnChange} rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={changeUpCase} >Convert to uppercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={changeLoCase}>convert to lowercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={changeCoCase}>change to RedCase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>copy text</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>remove extra spaces</button>
      </div>
      <div className={`container text-${props.mode==='light'?'black':'light'}`}>
        <h2 className="my-3">Your Text Summary</h2>
        <p>{text.length===0?0:text.split(" ").length} words {text.length} characters</p>
        <p>
          {/* filter method creates an arrayfilled with all array elements that passes a test */}
          {text.length===0?0:0.008 * text.split(" ").length} minutes to read
        </p>
        <h2>preview</h2>
      </div>
        <p className="container"><b>{text.length===0?'write above something to preview here':text}</b></p>
    </div>
  )
}
