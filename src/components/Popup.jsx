import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PopupComponent = ({popup}) => {
    const [openPopup, setOpenPopup] = useState(true);

    const handleClick = () => {
        setOpenPopup(!openPopup);
        document.querySelector('.popup').remove();
    }

    useEffect(() => {
        openPopup ? document.body.classList.add("noscroll") : document.body.classList.remove("noscroll");
    }, [openPopup]);
    
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

const Popup = ({popup}) => {
    if (popup === null) {
        return
    } else {
        return <PopupComponent popup={popup}/>
    }
}

export default Popup;