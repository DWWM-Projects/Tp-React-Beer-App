import React from "react";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      beers: [],
    }

  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then(response => this.setState({ beers: response.data}));
  }

  render() {
    return (
      <div>
        <div className="container d-flex flex-column  mx-auto my-2">
          <div className="header text-center">
            <Header />
            <Search />
          </div>
  
          <div className="catalog d-flex flex-column justify-content-center align-items-center">
            <Results beers={this.state.beers}/>       
          </div>
        </div>
  
      </div>
    );

  }

}

export default App;
