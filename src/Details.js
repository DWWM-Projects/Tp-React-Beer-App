import React from "react";
import Header from "./Header";
import withRouter from "./index";
import axios from "axios";
import { Link } from "react-router-dom";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selected: "",
        }
    }

    componentDidMount() {
        axios.get("https://api.punkapi.com/v2/beers/" + this.props.router.params.id).then(response => this.setState({ selected: response.data}));

    }

    render() {
        return (
            <div className="container d-flex flex-column align-items-center my-2">
                <Link to={"/"}><Header /></Link>
                <div className="details card text-center">
                    
                    <div className="redLine"></div>
                        <div>
                            <div>
                                <img src={this.state.selected.image} alt="" />
                                <div>
                                    <h3>{this.state.selected.name}</h3>
                                    <p>{this.state.selected.description}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>{this.state.selected.abv}%</span>
                                    <h3></h3>
                                    <ul>
                                        <li></li>
                                    </ul>
                                    <span>{this.state.selected.ibu}</span>
                                    <span>OOOOO</span>
                                </div>
                                <img src="./images/glass-6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    {this.props.router.params.id}
                <div>
                
            </div>
            </div>
        )
    }
}

// export default Details;
export default withRouter(Details);