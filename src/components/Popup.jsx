import { Link } from "react-router-dom"

const Popup = ({openPopup, setOpenPopup, popup}) => {
    const handleClick = () => {
        setOpenPopup(!openPopup);
        document.querySelector('.popup').remove();
    }

    return (
        <div className="popup">
            <div className="overlay" onClick={handleClick}></div>
            <div className="popup-tile">
                <button onClick={handleClick}>X</button>
                <h2>{popup.title}</h2>
                <p>{popup.description}</p>
                <Link className='btn green' to="/competition" onClick={handleClick}>{popup.buttonText}</Link>
            </div>
        </div>
    )
}

export default Popup;