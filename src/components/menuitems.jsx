import React, {Component} from 'react';

class MenuItems extends Component {
    constructor(props){
        super(props);
        //state is a valuble variable that can manipulate variable
        this.state = {
            price: this.props.price
        }
    }

    render(){
        return(
            <div>
                <h1>Menu</h1>
                <h2>{this.props.dishName}</h2>
                <h3>${this.state.price}</h3>
                <h4>{this.props.children}</h4>
                <button className="btn btn-danger" onClick={()=> this.setState({price: this.state.price + 1})}>Click Me</button>
            </div>
        )
    }
}

export default MenuItems;