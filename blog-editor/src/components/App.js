import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PostList from './PostList'
import PostCreate from './PostCreate'
import PostShow from './PostShow'
import PostDelete from './PostDelete'

const App = () => {
  return (
    <div className="container col-lg-5 mt-4">
      <Router>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/posts/new" exact component={PostCreate} />
          <Route path="/posts/:id" exact component={PostShow} />
          <Route path="/posts/delete/:id" exact component={PostDelete} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
