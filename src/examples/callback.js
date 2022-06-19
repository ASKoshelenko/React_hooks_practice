import React, {useState, useCallback} from 'react'
import ItemsList from '../ItemsList'

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)


  const styles = {
      color: colored? 'darkred' : 'black'
    }

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `Element ${i + indexNumber}`)
  }, [count])

    return (
    <>
      <h1 style={styles}>How much elements is here? I see: {count}</h1>
      <button className='btn-success' onClick={() => setCount(prev => prev + 1)}>Increase</button>
      {/* <button className='btn-danger' onClick={() => setNumber(prev => prev - 1)}>Decrease</button> */}
      <button className='btn-warning' onClick={() => setColored(prev => !prev)}>Change</button>
    
    <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}

export default App;