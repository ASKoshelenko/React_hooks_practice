import React from 'react'
import Alert from './Alert';
import Main from '../Main';
import { AlertProvider } from './AlertContext';

function App() {
    return (
      <AlertProvider>
        <div className={'container pt-3'}>
          <Alert />       
          <Main toggle={() => {}}/>
        </div>
    </AlertProvider>
  )
}

export default App;