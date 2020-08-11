import React from 'react'
import './Searchbar/SearchBar.css';

class ImageList extends React.Component {
    state = {
        search: ''
    }
    onChange = (e) => {
        this.setState({ 
            search: e.target.value
         });
    }

    searchImage = () => {

        this.props.onSearchImage(this.state.search);

    }



    render(){
        return (
            <div className ="search-bar-container ui input">
                <input onKeyPress = {(e) => {
                    if(e.key === "Enter") {
                        this.searchImage();
                    }
                }} onChange = {this.onChange} value = {this.state.search} type="text" placeholder="Search..."/>
                <button onClick = {this.searchImage} className="ui icon button">
                    <i className="search icon"></i>
                </button>
            </div>
        )
    }
}

export default ImageList;
