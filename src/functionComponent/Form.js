import React, {useState} from 'react'

const Form = (props) => {
    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")

    // const [state, setState] = useState({
    //     author: "",
    //     quote: ""
    // })

    // const handleOnChange = (e) => {
    //     console.log(e.target.value)
    //     console.log(e.target.name)
    //     set[]()
    //     // setState({
    //     //     [e.target.name]:
    //     // })
    //     // this.setState({
    //     //     [e.target.name]: e.target.value
    //     // })
    //   }

      const handleQuoteChange = (e) => {
        setQuote(e.target.value)
      }

      const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
      }
    
      const handleOnSubmit = (e) => {
        e.preventDefault()
        props.handleAddQuote({
            author,
            quote
        })
      }
      return(
    <div>
          <h1>Add Quote Form</h1>
          <form onSubmit={handleOnSubmit}>
              <fieldset>
                <legend>Edit User</legend>
                <label>Author</label>
                <input 
                    type="text" 
                    value={author} 
                    onChange={handleAuthorChange} 
                    autoComplete="off" name="author" 
                    placeholder="author"
                    required
                />
                <label>Quote</label>
                <input 
                    type="text" 
                    value={quote} 
                    onChange={handleQuoteChange} 
                    autoComplete="off" 
                    name="quote" 
                    placeholder="quote"
                    required
                />
                <input type="submit" value="Submit"/>
              </fieldset>
          </form>
      </div>
      )
}

export default Form