const Button = ({tix, copy, type}) => {
        return (
            <a href={tix} target="_blank" className={'btn ' + type} role="button" rel="noreferrer">
                {copy}
            </a>
        )
    }

export default Button;