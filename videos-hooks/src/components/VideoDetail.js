import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

// Go to Youtube, click on any video \ Share \ Embed

// <iframe src="https://www.youtube.com/embed/aJ3Qm5QrEZo"</iframe>

// When our App component first loads up on the screen,  videoVideo is set to the null .  Then we pass it with the value of null down to the VideoDetail. We definitely cannot reference a property (here the video title) on the value of null.

// How to Fix:  add in a simple check inside the `videoDetail` component that says if there is no video or if video does not exist then I want to return a div that has the text loading.
