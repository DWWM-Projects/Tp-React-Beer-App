import React from "react";
import Beer from "./Beer";

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            beers: this.props.beers,
        }
    }

    render() {
        return(           
            
            <div className="">
                {/* <Beer beers={this.props.beers}/> */}
                {this.state.beers.map(beer => 
                  <div className="beerPanel card d-flex align-items-center my-2 col-3 mx-2" key={beer.id}>
                    <div className="redLine"></div>
                    <div className="">{beer.name}</div>
                    <img className="beerPic" src={beer.image_url} />
                </div>)}
            </div> 
            
        )
    }
}

export default Results;