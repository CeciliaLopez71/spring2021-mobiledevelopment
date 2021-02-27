import React, {Component} from 'react'

const Input = ({setCount, count}) => {
    
    return (
        <div>
            <p></p>
            <div style = {{backgroundColor: "red"}}onClick = {()=>setCount(count+1)}>
                <h1>Increase Pushups</h1>

            </div>
        </div>

    )
}

export default Input
