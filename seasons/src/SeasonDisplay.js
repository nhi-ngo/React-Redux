import React from 'react';
import './SeasonDisplay.css';

// config object
const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly!',
    iconName: 'snowflake'
  }
};

// helper function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

// our component
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  // The code below is repetitive. Refactor it using object seasonConfig{}
  // const text = season === 'winter' ? 'Burr, it is chilly!' : 'Let\'s hit the beach!';
  // const icon = season === 'winter' ? 'snowflake' : 'sun';

  const {text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
