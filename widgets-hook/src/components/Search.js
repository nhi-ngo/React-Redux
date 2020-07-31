import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          srsearch: debouncedTerm,
          format: 'json',
        },
      });
      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" type="text" value={term} onChange={onInputChange} />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </>
  );
};

export default Search;

// https://www.mediawiki.org/wiki/API:Search#GET_request
