import React from "react";

class Search extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Hoppy, Malt, Angry, News..."/><button className="btn btn-danger text-light">RECHERCHE</button>
            </div>            
        )
    }
}

export default Search;