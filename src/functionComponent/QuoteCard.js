import React, { useState } from 'react';

const QuoteCard = (props) => {
    const [author, setAuthor] = useState(false)

    const handleClick = () => {
        setAuthor(!author)
    }
    return (
      <div className="quote-card">
          {
              author ? 
              <p>By: {props.quote.author}</p>
              :
              <p>{`"${props.quote.quote}"`}</p>
          }
          <button onClick={handleClick}>View {author ? "Quote" : "Author"}</button>
      </div>
    );
}

export default QuoteCard
