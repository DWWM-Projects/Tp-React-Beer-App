import React from "react";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import Beer from "./Beer";

function App() {
  return (
    <div className="App">

      <div className="container d-flex flex-column  mx-auto">
        <div className="header text-center">
          <Header />
          <Search />
        </div>

        <div className="catalog d-flex flex-column justify-content-center align-items-center">
          <Results />
          <Beer />
        </div>
      </div>

    </div>
  );
}

export default App;
