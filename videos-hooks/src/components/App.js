import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    onTermSubmit('buildings');
  }, []);

  const onTermSubmit = async (term) => {
    const { data } = await youtube.get('/search/', {
      params: {
        q: term,
      },
    });
    setVideos(data.items);
    setSelected(data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selected} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={(video) => setSelected(video)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// Making an API request is an asynchronous operation. Anytime that we make an asynchronous operation we have to interact with it using either promises or async await.

// The moment that user searches for something, a list of video and the first video on that list both display on the screen
