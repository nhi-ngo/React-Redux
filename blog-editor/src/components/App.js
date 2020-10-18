import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostList from './PostList'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PostList} />
        {/* <Route path="/posts/new" exact component={PostCreate} /> */}
        {/* <Route path="/posts/:id" exact component={PostShow} /> */}
      </Switch>
    </Router>
  )
}

export default App
