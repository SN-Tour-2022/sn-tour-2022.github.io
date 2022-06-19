const Terms = ({terms}) => {
    return (
        <div className="main">
            {terms.termsConditions.json.content}
        </div>
    )
}

export default Terms;