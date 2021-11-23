import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            {/*NavLink allow us to add an aditional class, exact will validate the match between the path and url*/}
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {/*<Link className="nav-link active" to="/">Home </Link>
                        <Link className="nav-link" to="/login">Login </Link>
                        <Link className="nav-link" to="/about">About </Link>*/}
                        <NavLink exact activeClassName="active" className="nav-link active" to="/">Home </NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="/login">Login </NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="/about">About </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
