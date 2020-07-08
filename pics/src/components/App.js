/* eslint-disable class-methods-use-this */
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: res.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '30px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// query specifies the search term
// SearchBar component is the one that call onSearchSubmit() callback not the App
// the value of this inside onSearchSubmit() is 'onSubmit' props object.

// We make it an arrow function to change the value of this so that it bounds to its surrounding scope which is the instance of App component. That way, it have access to the sate and be able to update the state by calling setState.

// Before decomposing of unsplash component

// 1. Using async await
// onSearchSubmit = async (term) => {
//   const res = await axios.get('https://api.unsplash.com/search/photos', {
//     params: {
//       query: term,
//     },
//     headers: {
//       Authorization: 'Client-ID JEE80zIM7TRuKrAUbEPTd8W07A_2g4BIeKwVI-WSJjQ',
//     },
//   });

//   this.setState({
//     images: res.data.results
//   });
// }

// 2. Using promises
// onSearchSubmit(term) {
//   const res = await axios
//      .get('https://api.unsplash.com/search/photos', {
//          params: {
//            query: term,
//          },
//          headers: {
//            Authorization: 'Client-ID JEE80zIM7TRuKrAUbEPTd8W07A_2g4BIeKwVI-WSJjQ',
//          },
//      })
//      .then (res => this.setState({ images: res.data.results }));
// }
