import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')

      let body = document.body
      body.style.backgroundColor = '#000D21'

      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils-Dark Mode'

    }
    else {
      setMode('light')

      let body = document.body
      body.style.backgroundColor = 'white'

      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils-Light Mode'
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        {/* <Navbar/> */}

        <div className="container my-5">
          {/* <Routes> */}
            {/* <Route path="/" element=
              { */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
              {/* }/> */}
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router > */}

    </>
  );
}

export default App;