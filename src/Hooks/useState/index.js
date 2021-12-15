import { useState } from 'react';

function UseState() {
  const[value,setValue]=useState('parth')
  return (
    <div className="App">
        <h1>
          <input type="text" name="name" id=""  onChange={(e)=>setValue(e.target.value)}/>
          {value}
        </h1>
    </div>
  );
}

export default UseState;