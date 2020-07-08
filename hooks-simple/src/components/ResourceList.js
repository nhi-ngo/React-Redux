import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
  );
}

export default ResourceList;

// When do we want to make this API request??
// We probably want to make the request as soon as our component is first rendered to the screen
// => use componentDidMount() to do some initial data loading

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/todos
