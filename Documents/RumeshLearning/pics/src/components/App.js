import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] };


    onSearchSubmit = async term => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: {query: term , client_id: 'CZms6d-l5YYunFjLvDXgUPQtBySM0xU0U8V7B-juuY4'},
        });

        this.setState({ images: response.data.results});
    }


    



    render () {
        return (
            <div className="ui container" style ={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;