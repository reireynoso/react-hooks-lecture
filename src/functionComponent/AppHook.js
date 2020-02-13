import React, {useState, useEffect} from 'react'
import '../App.css';
import Form from './Form'
import QuoteContainer from './QuoteContainer'

const AppHook = () => {

    const [quotes, setQuotes] = useState([])
    const [addQuote, setAddQuote] = useState(false)

    useEffect(
        () => {
            fetch(`http://localhost:4000/quotes`)
            .then(res => res.json())
            .then(quotes => setQuotes(quotes))
        },
        []
    )

    const handleAddQuote = (newQuote) => {
        setQuotes([...quotes, newQuote])
        setAddQuote(false)
      }
    
      const handleAddMode = () => {
        setAddQuote(!addQuote)
      }

    return (
    <div className="App">
        <button onClick={handleAddMode}>Add Quote</button>
        {
          addQuote ? 
          <Form handleAddQuote={handleAddQuote}/>
          :
          <QuoteContainer quotes={quotes}/>
        }
      </div>
    )
}

export default AppHook