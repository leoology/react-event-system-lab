// Code Keypad Component Here
import React from 'react'
class Keypad extends React.Component{
    handleInputPassword =()=> console.log("Entering password...")
    render(){
        return(
            <input type="password"
            onKeyUp={this.handleInputPassword}>

            </input>
        )
    }
}
export default Keypad