import React, { Component } from 'react';

import SearchBar from "./search_bar.jsx"
import Gif from "./gif.jsx"
import GifList from "./gif_list.jsx"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGif: "ZNLn0neQ5S5DIv1S1s"
    }


  };

  selectGif = (id) => {
    this.setState( {selectedGif: id});
  }

  render() {
    const giflistid = ["QmGNyawKfJiKhU48Ni", "2fOn4XZlzmPBxQuLv4", "ZNLn0neQ5S5DIv1S1s"];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif gifId={this.state.selectedGif} />
          </div>

        </div>
        <div className="right-scene">
          <GifList gifListId={giflistid} selectGif={this.selectGif}/>
        </div>
      </div>
    )
  }

}

export default App;
