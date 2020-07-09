import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  // console.log(song);

  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h4>Detail for:</h4>
      <p>
        Title: {song.title}
        <br />
        Length: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
