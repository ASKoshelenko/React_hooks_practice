import React, {useState, useEffect, useRef} from 'react'


// let renderCount = 1

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')


  useEffect(() => {

    renderCount.current++
    // setRenderCount(prev => prev + 1)
    console.log(inputRef.current.value)
  })



  const focus = () => inputRef.current.focus()
  
  useEffect(() => {
    prevValue.current = value
  }, [focus])

  return (
    <div>
      <h1>How much renders? Renders: {renderCount.current}</h1>
      <h2>Previous state is: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
      <button className='btn-success' onClick={focus}>Focus</button>
      {/* <input type="text" onChange={e => setValue(e.target.value)} value={value}/> */}
    </div>
  );
}

export default App;