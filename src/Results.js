import React from "react";
import Beer from "./Beer";

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(           
            
            <div className="">
                
                <div className="row">
                    {this.props.beers.map(beer => 
                    <div className="beerPanel my-2 col-4" key={beer.id}>
                        <Beer beer={beer}/>
                    </div>)}
                </div>
            </div>
            
        )
    }
}

export default Results;