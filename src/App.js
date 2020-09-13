import React, { Component } from "react";

import apiSearch from "./services/api";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";

import "./App.css";

class App extends Component {
  state = {
    galleryItems: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 0,
  };

  componentDidUpdate(prevProps, PrevState) {
    const prevQuery = PrevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchItems();
    }
  }

  onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fetchItems = () => {
    const { searchQuery, page } = this.state;

    apiSearch
      .apiSearch(searchQuery)
      .then((galleryItems) => {
        this.setState((prevState) => ({
          galleryItems,
          page: prevState.page + 1,
        }));
      })
      .then(this.onScroll())
      .catch((e) => {
        this.setState({ e });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchApi = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { loading, galleryItems, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchApi} />
        {galleryItems.length > 0 && <ImageGallery items={galleryItems} />}
        {galleryItems.length > 0 && <Button />}
      </>
    );
  }
}

export default App;
