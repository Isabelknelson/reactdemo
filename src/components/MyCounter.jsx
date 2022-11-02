import { useState } from "react";


const Counter = () => {
    
    //let countState = 77
    const [countState, setCountState] = useState[77]
    
    function intCount(){
        //countState++
        setCountState(countState + 1)
    }

    return (
        <div>
            <div>{countState}</div>
            <button>+1</button>
        </div>
    )
}
export default Counter;