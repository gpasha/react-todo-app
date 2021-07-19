import React from 'react'
import { Form } from '../../components/Form'
import { Posts } from '../../components/Posts'

export const Home = () => {
    const posts = new Array(5)
        .fill('')
        .map((_, i) => (
        {
            id: i,
            title: `Post ${i + 1}`
        })
    )
    return (
        <>
            <Form />
            <Posts posts={posts} />
        </>
    )
}