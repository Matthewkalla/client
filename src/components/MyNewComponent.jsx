import React, {Component} from "react";

class MyNewComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.header}</h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default MyNewComponent;