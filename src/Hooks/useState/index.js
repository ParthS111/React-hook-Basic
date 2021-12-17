import { useState } from 'react';

function UseState() {
  // const [value, setValue] = useState('parth')
  const [add, setAdd] = useState(1)
  const addValue = () => {
    setAdd(add + 1)
  }
  const minusValue = () => {
    if (add === 1) {
      setAdd(1)
    }
    else {
      setAdd(add - 1)
    }
  }
  return (
    <div className="App">
      <h1>
        <input type="text" name="name" id="" onChange={(e) => e.target.value===1? setAdd(1): setAdd(e.target.value)} value={add} />
        {add}
      </h1>
      <h1> {add}</h1>
      <button onClick={()=>setAdd(prevAdd=>prevAdd+1)}>Add</button><br /> <br />  <button onClick={minusValue}>Minus</button>
      
    </div>
  );
}

export default UseState;