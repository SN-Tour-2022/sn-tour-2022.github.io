/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Hamburger from "../partials/HamburgerMenu";
import {ReactComponent as Logo} from '../svgs/snlogo.svg';

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <nav className="nav">
            <h1 className="hidden">Spy Ninjas Live</h1>
            <div className="container nav-content">
                <Logo className="logo"/>
                <div className="nav-link-container">
                    <a className="nav-links" href="https://www.doctormikemedia.com">Website</a>
                    <a className="nav-links" href="/#tour-dates">Tour Dates</a>
                    <a className="nav-links" href="/competition">Competition</a>
                </div>
                <Hamburger open={open} setOpen={setOpen}/>
            </div>
            <div className={open ? "menu-tray menu-tray-open" : "menu-tray"}>
                <ul className="container">
                    <li><a className="nav-links nav-links-mobile" href="https://www.doctormikemedia.com">Spy Ninjas Website</a></li>
                    <li><a className="nav-links nav-links-mobile" href="/#tour-dates">Tour Dates</a></li>
                    <li><a className="nav-links nav-links-mobile" href="/competition">Competition</a></li>
                </ul>
            </div>
        </nav>
    )
} 

export default NavBar