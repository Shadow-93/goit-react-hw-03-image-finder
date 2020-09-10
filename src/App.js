import React, {Component} from 'react';
import axios from 'axios';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import './App.css';

class App extends Component {

  state = {
    galleryItems: [],
    loading: false,
    error: null,
    q: "",
  }
  // https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

  componentDidMount(){
    const key = '17751267-16ded02a741af1cdfc94a2144';
    const url = 'https://pixabay.com/api/';

    this.setState({loading:true})

    axios
    .get(`${url}?q=cats&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res=>{this.setState({galleryItems: res.data.hits})})
    .catch(e=>{this.setState({ e })})
    .finally(() => this.setState({loading: false}))
  }

  // onSubmit = (e) =>{
  //   e.preventDefault()
    
  //   const {value} = e.target;

  //   this.setState({q: value})

  //   this.setState({q: ""})
  // }

  render(){
    const {loading, galleryItems} = this.state
    
    return (
      <>
      <Searchbar/>
        {galleryItems.length>0 && <ImageGallery items={galleryItems}/>}
      </>
    )
  }
}

export default App