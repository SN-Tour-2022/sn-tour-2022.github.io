import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect } from "react";

const Terms = ({terms}) => {
    let termsList = [];
    console.log(terms.length)   

    for (let i = 0; i < terms.length; i++) {
        termsList.push(
            <ReactMarkdown key={i}>{terms[i].legalCopy}</ReactMarkdown>
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="terms container">
            {termsList}
        </div>
    )
}

export default Terms;