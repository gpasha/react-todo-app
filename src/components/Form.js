import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alertContext/alertContext'

export const Form = () => {
    const [value, setValue] = useState('')

    const {show} = useContext(AlertContext)
    const submitHandler = e => {
        e.preventDefault()
        if(value.trim()) {
            //...
            show('The note was created!', 'success')
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