import { AlertContext } from './alertContext'
import { useReducer } from 'react'
import { AlertReducer } from './alertReducer'
import { ALERT_SHOW, ALERT_HIDE } from '../types'


export const AlertState = ({children}) => {

    const [state, dispatch] = useReducer(AlertReducer, {visible: false})

    const show = (text, type = 'warning') => {
        dispatch({
            type: ALERT_SHOW,
            payload: {text, type}
        })
    }

    const hide = () => dispatch({type: ALERT_HIDE})

    return (
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}