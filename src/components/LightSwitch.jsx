import React, {Component} from "react";

class LightSwitch extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: "On"
        }
    }

    render(){
        return (
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                <button onClick={this.flipSwitch}>Flip switch</button>
            </fieldset>
        )
    }

    //a method to flip the switch
    flipSwitch = () =>{
        this.state.position === "On"
            ?this.setState({position:"Off"})
            :this.setState({position:"On"});
    }
}

export default LightSwitch;