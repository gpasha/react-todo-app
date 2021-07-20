import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alertContext/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Form = () => {
    const [value, setValue] = useState('')
    const firebaseContext = useContext(FirebaseContext)
    const {show} = useContext(AlertContext)
    const submitHandler = e => {
        e.preventDefault()
        if(value.trim()) {
            firebaseContext.addNote(value.trim())
                .then(() => {
                    show('The note was created!', 'success')
                })
                .catch(() => {
                    show('Something went wrong!', 'danger')
                })
            setValue('')
        }
        else {
            show('Please enter the note title')
        }
    }

    return (
        <form className="pt-4" onSubmit={submitHandler}>
            <input className="form-control"
            value={value}
            onChange={e => setValue(e.target.value)} />
        </form>
    )
}