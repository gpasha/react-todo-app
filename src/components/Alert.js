import React, {useContext} from 'react'
import { AlertContext } from '../context/alertContext/alertContext'

export const Alert = () => {

    const { alert, hide} = useContext(AlertContext)

    if(!alert.visible) {
        return null
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible mt-4 d-flex justify-content-between align-items-center`} role="alert">
            <strong>Message: </strong>
            {alert.text}
            <button type="button" className="btn btn-light close" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}