import React from 'react'

export const Posts = ({posts}) => {
    return (
        <ul className="list-group pt-4">
            {posts.map(post => (
                <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <strong>{post.title} </strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>
                    <button type="button" className="btn btn-danger">&times;</button>
                </li>
            ))}
        </ul>
    )
}