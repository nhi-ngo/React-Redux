import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
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
