import React from "react";
import {ReactComponent as StackedLogo} from '../svgs/snstackedlogo.svg';
import {ReactComponent as FooterTop} from '../svgs/footer-top.svg';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { scrollWidthOffset } from "../helpers";

const Footer = () => {
    return (
        <footer className="footer">
            <FooterTop className="footer-top"/>
            <section className="footer-content">
                <div className="container">
                    <a className='stacked-logo' href="/"><StackedLogo/></a>
                    <div className="nav-link-container nav-link-container-footer">
                        <ul>
                            <li><a className="nav-links" href="https://spyninjas.net/" target="_blank" rel="noreferrer">Spy Ninjas Website</a></li>
                            <li><HashLink className="nav-links" to="/#tour" smooth scroll={el => scrollWidthOffset(el)}>Tour Dates</HashLink></li>
                            <li><Link className="nav-links" to="/competition">Competition</Link></li>
                            <li><Link className="nav-links" to="/terms-and-conditions">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <p className="legal">©2022 Spy Ninjas. All Rights Reserved.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;