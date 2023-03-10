import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render(){
        const {firstName, lastName, hairColor} = this.props;
        return(
            <div>
                <h1>{firstName}, {lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.happyBirthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }

    happyBirthday = () =>{
        this.setState({age: this.state.age+1});
    }
}

export default PersonCard;