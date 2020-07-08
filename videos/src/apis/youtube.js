import axios from 'axios';

const KEY = 'AIzaSyCioWY4xo51WA0mzmKaZKRlUbsjaM2-5BI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY, // it does not show the requirement for KEY in the API documentation but we do need to include it in the params
  },

});

// https://developers.google.com/youtube/v3/docs/search/list#request

// HTTP request
// https://www.googleapis.com/youtube/v3/search
