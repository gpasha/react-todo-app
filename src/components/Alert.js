import React, {useContext} from 'react'
import { AlertContext } from '../context/alertContext/alertContext'
import { CSSTransition } from 'react-transition-group'

export const Alert = () => {

    const { alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition in={alert.visible}
                       timeout={1000}
                       classNames="alert"
                       mountOnEnter
                       unmountOnExit>
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible mt-4 d-flex justify-content-between align-items-center`} role="alert">
                <span>
                    <strong>Message: </strong>
                    {alert.text}
                </span>
                <button type="button" className="btn btn-light close" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}