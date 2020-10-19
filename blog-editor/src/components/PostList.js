import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from '../actions'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h2>Posts</h2>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: Object.values(state.posts) }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
