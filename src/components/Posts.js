import React from 'react'

export const Posts = ({posts, onRemove}) => (
    <ul className="list-group pt-4">
        {posts.map(post => (
            <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>{post.title} </strong>
                    <small>{post.date}</small>
                </div>
                <button type="button" className="btn btn-danger" onClick={() => onRemove(post.id)}>&times;</button>
            </li>
        ))}
    </ul>
)