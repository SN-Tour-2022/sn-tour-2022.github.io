import React from "react";
import {ReactComponent as StackedLogo} from '../svgs/snstackedlogo.svg';
import {ReactComponent as FooterTop} from '../svgs/footer-top.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <FooterTop className="footer-top"/>
                <section className="footer-content">
                    <div className="container">
                        <a className='stacked-logo' href="#"><StackedLogo/></a>
                        <div className="nav-link-container nav-link-container-footer">
                            <ul>
                                <li><a className="nav-links" href="#">Spy Ninjas Website</a></li>
                                <li><a className="nav-links" href="#">Tour Dates</a></li>
                                <li><a className="nav-links" href="#">Competition</a></li>
                                <li><a className="nav-links" href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <p className="legal">©2022 Spy Ninjas. All Rights Reserved.</p>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;