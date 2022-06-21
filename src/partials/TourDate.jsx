import Button from './Button';

const TourDate = ({
    date, 
    time, 
    city, 
    venue, 
    ticketLink, 
    tixSoldOut, 
    vipSoldOut, 
    vipTicketLink
}) => {
    return (
        <div className="tour-date">
            <div className="tour-stop">
                <span className="city">{city}</span>
                <span className="venue">{venue}</span>
            </div>
            <div className="date-time">{date}<br className="sm-hidden"/><span className='sm-show'>&nbsp;&nbsp;|&nbsp;&nbsp;</span>{time}</div>
            <div className="ticket-btns">
                <Button
                    type={tixSoldOut ? "red" : "green"}
                    copy={tixSoldOut ? "Sold Out" : "Tickets"}
                    tix={ticketLink} />
                <Button
                    type={vipSoldOut ? "red" : "yellow"}
                    copy={vipSoldOut ? "Sold Out" : "VIP"}
                    tix={vipTicketLink} />
            </div>
        </div>
    )
}

export default TourDate;