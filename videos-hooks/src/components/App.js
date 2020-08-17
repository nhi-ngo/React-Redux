import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selected, setSelected] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelected(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
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
