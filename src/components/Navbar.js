import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand" style={{marginLeft: 16}}>
                Navbar
            </div>
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <Link class="nav-link" exact to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}