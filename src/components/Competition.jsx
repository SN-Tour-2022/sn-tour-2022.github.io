import { Link } from "react-router-dom";
import { useEffect } from "react";

const Competition = ({competition}) => {
    let prizeList = [];
    let secondaryPrizeList = [];

    for (let i = 0; i < competition.prizes.length; i++) {
        prizeList.push(
            <li key={i}>
                {competition.prizes[i]}
            </li>
        )
    }

    for (let i = 0; i < competition.secondaryPrizes.length; i++) {
        secondaryPrizeList.push(
            <li key={i}>
                {competition.secondaryPrizes[i]}
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
                <h2>{competition.grandPrizeTitle}</h2>
                <p>{competition.grandPrizeText}</p>
                <ul>
                    {prizeList}
                </ul>
                <h2>{competition.secondaryPrizeTitle}</h2>
                <p>{competition.secondaryText}</p>
                <ul>
                    {secondaryPrizeList}
                </ul>
                <a className="competition-btn btn" href={competition.url}>Join Our List</a>

                <p className="legal">Competition <Link to="/terms-and-conditions">Terms & Conditions</Link></p>
            </div>
        </section>
    )
}

export default Competition;