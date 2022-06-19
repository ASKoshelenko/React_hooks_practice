import React from 'react'
import { useAlert } from './alert/AlertContext'

export default function Main() {
    const {show} = useAlert()
    return (
        <>
            <h1>Hello from Context example</h1>
            <button onClick={() => show('This text from Main.js')} className='btn btn-success'>Show alert</button>
        </>
    )
}