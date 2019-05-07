import React, { Component } from 'react';

import SearchBar from "./search_bar.jsx"
import Gif from "./gif.jsx"
import GifList from "./gif_list.jsx"


const GIPHYAPI = "nOG7tdXIvI3V33fIRwJhZQlp8OYX7wRh"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGif: "ZNLn0neQ5S5DIv1S1s",
      selectedGifClicked: false,
      gifs: []
    }

    this.searchGif("sunny");
  };

  selectGif = (id) => {
    this.setState( {selectedGif: id});
  }

  searchGif = (query) => {
    const GphApiClient = require('giphy-js-sdk-core')
    const client = GphApiClient(GIPHYAPI)

    const gifsListID = client.search('gifs', {
        q: query ? query : "cats",
        limit: 10
      }).then((response) => {
        this.setState({
          gifs: response.data.map( (gifObject) => gifObject.id)
        })
      })
  }

  handleSelectedGifClick = () => {
    console.log("coucou")
    this.setState({
      selectedGifClicked: !this.state.selectedGifClicked
    })
  }

  gifSelectedClasses = () => {
    let classes = "selected-gif"
    if (this.state.selectedGifClicked) {
      classes += " selected-gif-clicked"
    }
    return classes
  }

  render() {
    // const giflistid = ["QmGNyawKfJiKhU48Ni", "2fOn4XZlzmPBxQuLv4", "ZNLn0neQ5S5DIv1S1s"];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchGif={this.searchGif} />
          <div className={this.gifSelectedClasses()} onClick={this.handleSelectedGifClick} >
            <Gif gifId={this.state.selectedGif} />
          </div>

        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    )
  }

}

export default App;
