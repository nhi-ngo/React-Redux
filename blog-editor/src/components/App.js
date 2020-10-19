import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PostList from './PostList'
import PostCreate from './PostCreate'

const App = () => {
  return (
    <div className="container mt-4">
      <Router>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/posts/new" exact component={PostCreate} />
          {/* <Route path="/posts/:id" exact component={PostShow} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
