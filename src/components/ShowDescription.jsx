const ShowDescription = ({showDescription}) => {
    return (
        <div className="show-description container">
            <p>{showDescription.text}</p>

            <p>{showDescription.onSaleInfo}</p>
        </div>
    )
}

export default ShowDescription;