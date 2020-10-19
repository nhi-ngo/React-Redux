import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPost } from '../actions'

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>
    }

    const { title, categories, content } = this.props.post

    return (
      <div>
        <Link to="/">Back to Posts</Link>
        <button clacssName="btn btn-danger">Delete Post</button>
        <h3>{title}</h3>
        <h6>Categories: {categories}</h6>
        <p>{content}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostShow)
