import React, {useState} from 'react'
import './App.css';

function computeInitialCounter() {
  console.log('Some calculations');
  return Math.trunc(Math.random() * 20)
}

function App() {
  const [counter, setCounter] = useState( () => {
    return computeInitialCounter()
  })

  const [state, setState] = useState({
    title:'Counter',
    date: Date.now()
  })

  // function increment() {
  //   setCounter(counter + 1)
  // }

  function increment() {
    setCounter( (prevCounter) => {
      return prevCounter + 1
    })
      // setCounter(prevCounter => prevCounter + 1)
  }


  function decrement() {
    setCounter(counter - 1)
  }


  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'New Title'
      }
    })
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Increase</button>
      <button onClick={decrement} className="btn btn-danger">Decrease</button>
      <button onClick={updateTitle} className="btn btn-default">Change title</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;


