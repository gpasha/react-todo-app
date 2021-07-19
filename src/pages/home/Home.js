import React, { useContext, useEffect } from 'react'
import { Form } from '../../components/Form'
import { Loader } from '../../components/Loader'
import { Posts } from '../../components/Posts'
import { FirebaseContext } from '../../context/firebase/firebaseContext'

export const Home = () => {

    const { loading, notes, fetchNotes } = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    // let loading = false

    // const posts = new Array(5)
    //     .fill('')
    //     .map((_, i) => (
    //     {
    //         id: i,
    //         title: `Post ${i + 1}`
    //     })
    // )

    return (
        <>
            <Form />
            <hr />
            {
                loading
                    ? <Loader />
                    : <Posts posts={notes} />
            }
        </>
    )
}