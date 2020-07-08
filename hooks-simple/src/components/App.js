import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () =>  {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}/>
    </div>
  );
}

export default App;

// Anytime we call setResource() that's going to cause our component to automatically render.
// Anything we pass into setResource() is then going to be assigned to the variable resource in [resource, setResource]. Here it is a string of either 'posts' or 'todos'.
