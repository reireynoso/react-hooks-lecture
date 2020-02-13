import React from 'react'
import QuoteCard from './QuoteCard'

const QuotesContainer = (props) => {
    return (
        <div id="quote-container">
          <h1>Motivational Quotes</h1>
          {
              props.quotes.map(quote => <QuoteCard key={quote.author} quote={quote}/>)
          }
      </div>
    )
}

export default QuotesContainer