import React, {useState} from 'react'

const info = [1,2]

const AppHook = () => {
    const [something, setSomething] = useState(1)
    console.log(something)
    console.log(setSomething)
    // const useState = (initialState) => {
    //     var _val = initialState
    //     const setState = (newState) => {
    //         // debugger
    //         _val = newState
    //     }
    //     return [_val, setState]
    // }

    return (
        <div className="App">
            <button onClick={this.handleAddMode}>Add Quote</button>
            {
            this.state.addQuote ? 
            <Form handleAddQuote={this.handleAddQuote}/>
            :
            <QuoteContainer quotes={this.state.quotes}/>
            }
      </div>
    )
}

export default AppHook