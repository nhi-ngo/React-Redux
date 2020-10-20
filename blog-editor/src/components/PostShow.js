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
    const { id } = this.props.match.params

    return (
      <div>
        <Link to="/">Back to Posts</Link>
        <Link to={`/posts/delete/${id}`} className="btn btn-danger float-right">
          Delete
        </Link>

        <div className="post-content">
          <h3 className="my-4">{title}</h3>
          <h6 className="mb-4">Categories: {categories}</h6>
          <p>{content}</p>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostShow)
