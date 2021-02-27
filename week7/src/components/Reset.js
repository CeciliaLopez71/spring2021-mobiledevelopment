import React, {component} from 'react'

const Reset = ({setCount, count}) => {
    
    return (
        <div>
            
            <div style = {{backgroundColor: "blue"}}onClick = {()=>setCount(0)}>
                <h1>Reset</h1>

            </div>
        </div>

    )
}

export default Reset
