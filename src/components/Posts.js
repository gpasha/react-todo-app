import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Posts = ({posts, onRemove}) => (
    <TransitionGroup component="ul" className="list-group pt-4">
        {posts.map(post => (
            <CSSTransition key={post.id} classNames={'note'} timeout={1000}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <strong>{post.title} </strong>
                        <small>{new Date(post.date).toLocaleDateString()}</small>
                    </div>
                    <button type="button" className="btn btn-danger" onClick={() => onRemove(post.id)}>&times;</button>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
)