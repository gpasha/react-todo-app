import React from 'react'

export const Alert = ({alert}) => {

    if(!alert) {
        return null
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible mt-4 d-flex justify-content-between align-items-center`} role="alert">
            <strong>Message: </strong>
            {alert.text}
            <button type="button" className="btn btn-light close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}