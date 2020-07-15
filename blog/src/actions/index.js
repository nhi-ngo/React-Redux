import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

export const fetchUser = id => dispatch => memoizedFetchUser(id, dispatch);

// private function - One Time Memoization
const memoizedFetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
});

// _.memoize() is just going to return whatever was returned the first time it was called.
// fetchUser() returns the same FUNCTION every single time it gets called.
// So Redux-thunk is still going to invoke that function.

// Either calling memoize() on the outer or inner function won't fix the problem.

// export const fetchUser = _.memoize(function(id) {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data,
//     });
//   };
// });

// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data,
//     });
//   });
// };
