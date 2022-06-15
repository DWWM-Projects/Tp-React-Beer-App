import React from "react";
import axios from "axios";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      beers: [],
      // myStorage: [],
    }
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then(response => this.setState({ beers: response.data}));
    // localStorage.setItem("this.state.myStorage", this.state.beers);
  }

  render() {
    return (
      <div>
        <div className="container mx-auto my-2">
          <div className="header text-center">
            <Header />
            <Search />            
          </div>

          <div className="catalog mx-auto">
            <Results beers={this.state.beers}/>

          </div>
        </div>  
      </div>
    );

  }

}

export default App;
