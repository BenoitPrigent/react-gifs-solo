import React, { Component } from 'react';


class SearchBar extends Component {

  handleSearch = (event) => {
    this.props.searchGif(event.target.value)
  }


  render() {
    return <input
      className="form-search form-control"
      placeholder="Search a Gif.. "
      onChange={this.handleSearch}
      />
  }

}

export default SearchBar;
