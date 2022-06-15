import React from "react";
import { Link } from "react-router-dom";

class Beer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.beer);
        return (
            
            <div className="row col-12 mx-auto">
                
         
                <Link to={"/details/" + this.props.beer.id}>
                <div className="beerPanel card d-flex align-items-center my-2 mx-2" key={this.props.beer.id}>
                    <div className="redLine"></div>
                    <div className="">{this.props.beer.name}</div>
                    <img className="beerPic" src={this.props.beer.image_url} />
                
                </div></Link>
                
                
            </div>
          
        )
    }
}

export default Beer;