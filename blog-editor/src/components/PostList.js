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
        <div>
          <Link to={`/posts/${post.id}`} key={post.id} className="list-group-item">
            {post.title}
          </Link>
        </div>
      )
    })
  }

  renderCreate() {
    return (
      <div className="text-right">
        <Link to="/posts/new" className="btn btn-primary">
          Add a Post
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderCreate()}
        <h1>Posts</h1>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: Object.values(state.posts) }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
