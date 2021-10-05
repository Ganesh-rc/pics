import React from 'react';
import unsplash  from "../api/unsplash";
//import ReactDOM from 'react-dom';
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: []};
    /*
    OnSearchSubmit= async (term) => {
        console.log(term+" from App.js");
        const response = await axios
            .get('https://api.unsplash.com/search/photos',{
                params: {query : term},
                headers :{
                    Authorization: 'Client-ID iZc2gRhfUGmdM9lWaBlfkr1JWlKiBo6SLZcTgUQ0vwY' 
                
            });
        this.setState({images: response.data.results});
    }
    */
    // onSubmit on Searchbar is a prop which is invoked in searchbar script
    // here child(searchbar) is passing state.term value to parent(App) component
    OnSearchSubmit= async (term) => {
        console.log(term+" from App.js");
        const response = await unsplash.get('/search/photos',{
            params: {query: term}
        });
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.OnSearchSubmit}/>
                Found {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        );
    }

};

export default App;