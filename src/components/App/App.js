import React, { Component } from "react";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

import apiSearch from "../../services/api";

import "./App.css";

export default class App extends Component {
  state = {
    searchQuery: "",
    loading: false,
    galleryItems: [],
    page: 1,
    showModal: false,
    largeImageURL: "",
    e: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery || prevState.page !== this.state.page) {
      this.fetchItems();
    }
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
        this.onScroll();
      });
  };

  handleSearchApi = (query) => {
    this.setState({ searchQuery: query, page: 1, galleryItems: [] });
  };

  openModal = (itemsId) => {
    const itemId = this.state.galleryItems.find(({ id }) => id === itemsId);

    this.setState({ largeImageURL: itemId.largeImageURL });
  };

  closeModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { loading, galleryItems, showModal, largeImageURL } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchApi} />
        {showModal && (
          <Modal onCloseItem={this.closeModal} largeImageURL={largeImageURL} />
        )}
        {galleryItems.length > 0 && (
          <ImageGallery
            items={galleryItems}
            onItemClick={this.openModal}
            onCloseItem={this.closeModal}
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
