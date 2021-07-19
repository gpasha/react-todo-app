import React, { useReducer } from 'react'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import axios from 'axios'
import { SHOW_LOADER } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {

    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)

        console.log('fetchNotes res: ', res.data)
    }

    const addNote = async id => {
        const res = axios.post(`${url}/notes/${id}`)

        console.log('addNote res: ', res.data)
    }

    const removeNote = async id => {
        const res = axios.delete(`${url}/notes/${id}`)

        console.log('removeNote res: ', res.data)
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchNotes, addNote, removeNote,
            notes: state.notes, loading: state.loading
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}