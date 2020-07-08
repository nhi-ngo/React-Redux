import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search/', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: res.data.items,
      // The moment that user searches for something, a list of video and the first video on that list both display on the screen
      selectedVideo: res.data.items[0],
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// Making an API request is an asynchronous operation. Anytime that we make an asynchronous operation we have to interact with it using either promises or async await.

// The moment that user searches for something, a list of video and the first video on that list both display on the screen
