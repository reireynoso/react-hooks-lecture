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

    // const [inf, setInf] = useState(info)
    // console.log(inf)
    // setInf([3,4])
    // console.log(inf)

    return (
        <ul>

        </ul>
    )
}

export default AppHook