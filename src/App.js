import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled","success")
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success")
    }
  }

  return (
    <>
     {/* <BrowserRouter> */}
      <Navbar title="New Title" aboutText="About Text" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    {/*  <div>
          <Routes>
           <Route exact path="/about" element={<About />} />
           <Route exact path="/" element={<TextForm h1="This is for text" mode={mode} showAlert={showAlert}/>} />
          </Routes>
         {/* <About /> */}
       {/* </div>  */}
       {/* </BrowserRouter> */}
    
    <TextForm h1="This is for text" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
