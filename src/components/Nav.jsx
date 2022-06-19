/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Hamburger from "../partials/HamburgerMenu";
import {ReactComponent as Logo} from '../svgs/snlogo.svg';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { scrollWidthOffset } from "../helpers";


const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <nav className="nav">
            <h1 className="hidden">Spy Ninjas Live</h1>
            <div className="container nav-content">
                <a href="/" className="logo-link"><Logo className="logo"/></a>
                <div className="nav-link-container">
                <a className="nav-links" href="https://spyninjas.net/" target="_blank" rel="noreferrer">Spy Ninjas Website</a>
                <HashLink className="nav-links" to="/#tour" smooth scroll={el => scrollWidthOffset(el)}>Tour Dates</HashLink>
                <Link className="nav-links" to="/competition">Competition</Link>
                </div>
                <Hamburger open={open} setOpen={setOpen}/>
            </div>
            <div className={open ? "menu-tray menu-tray-open" : "menu-tray"}>
                <ul className="container">
                    <li><a className="nav-links" href="https://spyninjas.net/" target="_blank" rel="noreferrer">Spy Ninjas Website</a></li>
                    <li><HashLink className="nav-links" to="/#tour" smooth scroll={el => scrollWidthOffset(el)}>Tour Dates</HashLink></li>
                    <li><Link className="nav-links" to="/competition">Competition</Link></li>
                </ul>
            </div>
        </nav>
    )
} 

export default NavBar