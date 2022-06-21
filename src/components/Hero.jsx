import {ReactComponent as TourLogo} from "../svgs/tourLogo.svg";

const Hero = () => {
    return (
        <section className="hero">
            <img className="hero-banner" src="SpyNinjasBanner.jpg" alt=""/>
            <div className="hero-logo-wrapper">
                <TourLogo className="hero-tour-logo"/>
            </div>
            <div className="hero-chad-vy">
                <img src="chadfighting.png" alt=""/>
                <img src="vyfighting.png" alt="" />
            </div>
        </section>
    )
}

export default Hero;