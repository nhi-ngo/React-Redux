// note lowercase in the name for function, uppercase for component

import { useState, useEffect } from 'react';
import axios from 'axios';

// Hook related stuff
const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
}

export default useResources;



// 2nd way 
// const useResources = (resource) => {
//   const [resources, setResources] = useState([]);

//   useEffect(() => {
//     (async (resource) => {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

//      setResources(response.data);
//     })(resource);
//   },[resource]
//  );

//   return resources;
// }

// export default useResources;



//  define the function and invoke it immediately

// useEffect(() => {
//   (async...)();
// }
