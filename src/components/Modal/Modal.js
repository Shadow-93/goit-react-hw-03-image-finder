import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  static propTypes = {
    onCloseItem: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseItem();
    }
  };

  backdropClose = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onCloseItem();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.backdropClose}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />;
        </div>
      </div>
    );
  }
}

export default Modal;
