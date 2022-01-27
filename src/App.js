import React from 'react';
import './App.css';
import StudentInfo from './components/StudentInfo';
import Title from './components/Title';




function App() {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`

  return (
    
    <div className="App">
      <Title />
      <h2>{date}</h2>
      <StudentInfo />
      
      
        
    </div>
  );
}

export default App;
