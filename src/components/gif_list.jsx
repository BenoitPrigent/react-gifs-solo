import React, { Component } from 'react';

import Gif from "./gif.jsx"

class GifList extends Component {


  // map pour les list !!!
  renderList = () => {
    return (this.props.gifs.map((id) => {
        return <Gif gifId={id} key={id} selectGif={this.props.selectGif} /> // obligatoire de mettre une key
      })
    )
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;
