import { Link } from "react-router-dom";
import { useEffect } from "react";

const Competition = ({competition}) => {
    let prizeList = [];

    for (let i = 0; i < competition.prizes.length; i++) {
        prizeList.push(
            <li>
                {competition.prizes[i]}
            </li>
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <section className="competition">
            <div className="competition-hero">
                <div className="container">
                    <h2>Competition</h2>
                </div>
            </div>
            
            <div className="competition-details container">
                <p>{competition.text}</p>
                <ul>
                    {prizeList}
                </ul>
                <a className="competition-btn btn" href={competition.url}>Join Our List</a>

                <p className="legal">Competition <Link to="/terms-and-conditions">Terms & Conditions</Link></p>
            </div>
        </section>
    )
}

export default Competition;