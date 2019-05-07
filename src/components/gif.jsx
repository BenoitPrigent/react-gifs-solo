import React, { Component } from 'react';



class Gif extends Component {

  handleClick = (props) => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.gifId);
    }
  }

  render() {
    // const src = "https://source.unsplash.com/random"
    const src = `https://media.giphy.com/media/${this.props.gifId}/giphy.gif`
    return <img className="gif" src={src} alt="" onClick={this.handleClick} />
  }

}


export default Gif;
