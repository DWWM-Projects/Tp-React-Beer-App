import React from "react";
import Beer from "./Beer";

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
     
            <div>
                <div className="d-flex flex-row">
                    <div className="card beer col-4 my-2"><Beer beers={this.props.beers}/></div>
                </div>
 
            </div>
        )
    }
}

export default Results;