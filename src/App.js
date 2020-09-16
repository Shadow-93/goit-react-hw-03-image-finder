import React, { Component } from "react";

import apiSearch from "./services/api";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";

import "./App.css";

export default class App extends Component {
  state = {
    searchQuery: "",
    loading: false,
    galleryItems: [],
    page: 1,
    showModal: false,
    largeImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchItems();
    }

    if (prevState.page !== this.state.page) {
      this.fetchItems();
    }

    this.onScroll();
  }

  onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  nextPage = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
  };

  fetchItems = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    apiSearch
      .apiSearch(searchQuery, page)
      .then((galleryItems) => {
        this.setState((prevState) => ({
          galleryItems: [...prevState.galleryItems, ...galleryItems],
        }));
      })
      .catch((e) => {
        this.setState({ e });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleSearchApi = (query) => {
    this.setState({ searchQuery: query, page: 1, galleryItems: [] });
  };

  togleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  openModal = (itemsId) => {
    const itemId = this.state.galleryItems.find(({ id }) => id === itemsId);

    this.setState({ largeImageURL: itemId.largeImageURL });
  };

  render() {
    const { loading, galleryItems, showModal, largeImageURL } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchApi} />
        {showModal && (
          <Modal
            {...galleryItems}
            onCloseItem={this.togleModal}
            largeImageURL={largeImageURL}
          />
        )}
        {galleryItems.length > 0 && (
          <ImageGallery
            items={galleryItems}
            onOpenItem={this.togleModal}
            onItemClick={this.openModal}
          />
        )}
        {loading && <Loader />}
        {galleryItems.length > 0 && !loading && (
          <Button onClickBtn={this.nextPage} />
        )}
      </>
    );
  }
}
