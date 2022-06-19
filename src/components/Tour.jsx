import {months} from '../constants';
import TourDate from '../partials/TourDate';

const Tour = ({dates}) => {
    let tourDates = [];

    const dateTime = ({date}) => {
        let splitDate = date.split('-');
        splitDate[2] = splitDate[2].split('T');
        splitDate = splitDate.flat();
        splitDate[3] = splitDate[3].split(':')[0];
        let year = splitDate[0];
        let month = months[splitDate[1]];
        let day = splitDate[2];
        let time = `${splitDate[3] - 12} PM`
        let showDate = `${month} ${day}, ${year}`;

        let dateTime = {
            time: time,
            date: showDate
        }
        return dateTime;
    }

    let sortedDates = dates.sort((a, b) => a.date.split('T')[0] > b.date.split('T')[0] ? 1 : -1);

    for (let i = 0; i < sortedDates.length; i++) {
        let date = dateTime(sortedDates[i]);

        tourDates.push(
            <li className="tour-date-item" key={i}>
                <TourDate {...sortedDates[i]} date={date.date} time={date.time}/>
            </li>
        )            
    }

    return (
        <section className="tour" id="tour">
            <div className="tour-banner">
                <div className="container">
                    <h2>Tour Dates</h2>
                </div>
            </div>
            <div className="tour-dates container">

            <ul className="tour-date-list">
                {tourDates}
            </ul>

            </div>
        </section>
    )
}

export default Tour;