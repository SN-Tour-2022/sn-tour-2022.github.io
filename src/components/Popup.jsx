import { Link } from "react-router-dom"

const Popup = ({openPopup, setOpenPopup}) => {
    const handleClick = () => {
        setOpenPopup(!openPopup);
        document.querySelector('.popup').remove();
    }

    return (
        <div className="popup">
            <div className="overlay" onClick={handleClick}></div>
            <div className="popup-tile">
                <button onClick={handleClick}>X</button>
                <p>Enter our competition for the chance to win a trip for four to see Chad and Vy in Seattle!</p>
                <Link className='btn green' to="/competition" onClick={handleClick}>Click here for information</Link>
            </div>
        </div>
    )
}

export default Popup;