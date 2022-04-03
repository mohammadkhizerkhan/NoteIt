import React from 'react'
import { Logo } from '../assets'
import {Link} from "react-router-dom"
function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">
            <Logo/>
            </Link>
        </nav>
    )
}

export default NavBar
