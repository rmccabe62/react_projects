import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Button} from '@material-ui/core';
import reportWebVitals from './reportWebVitals';



function CTime() {
  const time = null;
  const [ctime,setDate] = useState(time);

  const handelTime = () =>{
    let time = new Date().toLocaleTimeString();
    setDate(time);
  }

  return (
    <>
      <h3>{ctime}</h3>
      <Button color="primary" variant="contained" style={{margin: '0 auto', display: "flex"}} onClick={handelTime}>In</Button><Button color="primary" variant="contained" style={{margin: '0 auto', display: "flex"}} onClick={handelTime}>Out</Button>
    
    </>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <App />,
    <CTime />,
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
