import React, { useContext, useReducer} from 'react'


const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT: return {...state, visible: true, text: action.text}
        case HIDE_ALERT: return {...state, visible: false}

        default: return state
    }
}

export const AlertProvider = ({children}) => {
    // const [alert, setAlert] = useState(false)

    // const toggle = () => setAlert(prev => !prev)

    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''

    })

    const show = text => dispatch({ type: SHOW_ALERT, text })
    const hide = () => dispatch({ type: HIDE_ALERT })


    return (
        // <AlertContext.Provider value={alert}>
        //     <AlertToggleContext.Provider value={toggle}>
        //     { children }
        //     </AlertToggleContext.Provider>
        // </AlertContext.Provider>

        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            // toggle
            show, hide
        }}>
           { children }
        </AlertContext.Provider>
    )
}
