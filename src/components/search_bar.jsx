import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   focus: false
    // }
  }

  handleSearch = (event) => {
    return this.props.searchGif(event.target.value)
  }


  classesNames = () => {
    let classes = 'form-search form-control'
    // if (this.state.focus) {
    //   classes += " form-search-focus"
    // }
    return classes
  }

  // handleFocus = (event) => {
  //   this.setState({
  //     focus: !this.state.focus
  //   })
  // }

  render() {
    return <input
      className={this.classesNames()}
      placeholder="Search a Gif.. "
      onChange={this.handleSearch}
      // onFocus={this.handleFocus}
      />
  }

}

export default SearchBar;
