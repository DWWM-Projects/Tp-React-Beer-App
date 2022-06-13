

function App() {
  return (
    <div className="App">

      <div className="container d-flex flex-column  mx-auto">
        <div className="header text-center">
          <h1 className="title"><em>BEER APP</em></h1><br></br>
          <input type="text" /><button>RECHERCHE</button>
        </div>

        <div className="catalog d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-row">
            <div className="card beer col-4 my-2">123</div>
            <div className="card beer col-4 my-2 mx-2">123</div>
            <div className="card beer col-4 my-2">123</div>
          </div>
          <div className="d-flex flex-row">
            <div className="card beer col-4 my-2">123</div>
            <div className="card beer col-4 my-2 mx-2">123</div>
            <div className="card beer col-4 my-2">123</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
