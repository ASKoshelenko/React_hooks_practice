import React, {useState, useMemo, useEffect} from 'react'

function complexCompute(num) {
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
      color: colored? 'darkred' : 'black'
    }), [colored])

  const computed = useMemo(() => {
    return complexCompute(number)
  })

  useEffect(() => {
    console.log('Styles changed');
  }, [styles])


  return (
    <div>
      <h1 style={styles}>Calculate property: {computed}</h1>
      <button className='btn-success' onClick={() => setNumber(prev => prev + 1)}>Increase</button>
      <button className='btn-danger' onClick={() => setNumber(prev => prev - 1)}>Decrease</button>
      <button className='btn-warning' onClick={() => setColored(prev => !prev)}>Change</button>
    </div>
  );
}

export default App;