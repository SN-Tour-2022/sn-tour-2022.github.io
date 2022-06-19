import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Terms = ({terms}) => {
    let termsList = [];
    console.log(terms.length)   

    for (let i = 0; i < terms.length; i++) {
        termsList.push(
            <ReactMarkdown key={i}>{terms[i].legalCopy}</ReactMarkdown>
        )
    }

    return (
        <div className="terms container">
            {termsList}
        </div>
    )
}

export default Terms;