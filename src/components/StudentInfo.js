import React, { useState} from "react";

function StudentInfo() {
    const [studentName, setStudentName] = useState('');
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    
    return (
        <div>
            <h3><label>Student Name: </label> </h3>
            <input value={studentName} onInput={e => setStudentName(e.target.value)}/>
            <input value={input} onInput={e => setInput(e.target.value)}/>
            <h3><label>Student Major: </label></h3>
            <input value={input2} onInput={e => setInput2(e.target.value)}/>
        </div>
    )
}

export default StudentInfo