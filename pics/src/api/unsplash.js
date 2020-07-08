import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID JEE80zIM7TRuKrAUbEPTd8W07A_2g4BIeKwVI-WSJjQ',
  },
});
