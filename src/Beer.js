import React from "react";

class Beer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            beers: this.props.beers,
        }
    }

    render() {
        return (
            <div>
                {this.state.beers.map(beer => 
                  <div key={beer.id}>
                    <div className="col-12 redLine"></div>
                    <div className="">{beer.name}</div>
                    <img className="beerPic" src={beer.image_url} />
                  </div>)}
            </div>
          
        )
    }
}

export default Beer;