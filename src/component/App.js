import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './image/ImageList';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    images : []
  }

  onSearchImage = async(search) => {
    const result = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query : search
      },
      headers:{
        Authorization: 'Client-ID -qvuSWoKEi4CZx5LdQkaZNdbvXagnFLd5UT-_sbWvPI'

      }
    })
    this.setState({ 
      images : result.data.results
    });
  }

  componentDidMount() {
    
  }

  render(){
    return (
      <div className="app-container">
  
          <SearchBar onSearchImage = {this.onSearchImage}/>
          <ImageList images = {this.state.images} />
      </div>
    );
  }
}

export default App;
