import React, {useState} from 'react'

const SampleHook = () => {

    const [count, setCount] = useState(0)
    // const [chocs, setChocs] = useState([])
    // state = {
    //     count: 0,
    //     chocs: []
    // }

    const handleAddClick = () => {
        setCount(count + 1) 
    }

    const handleMinusClick = () => {
        setCount(count - 1)   
    }

    return (
    <div>
        <h1>Count: {count}</h1>
            <button onClick={handleAddClick}>Increase Count</button>
            <button onClick={handleMinusClick}>Decrease Count</button>
    </div>
    )
}

export default SampleHook