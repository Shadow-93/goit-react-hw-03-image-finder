import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
  static props = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: "",
  };

  searchChange = (e) => {
    e.preventDefault();

    this.setState({ inputValue: e.target.value });
  };

  searchSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.searchSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.searchChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
