import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPost, deletePost } from '../actions'

class PostShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  onButtonDelete = () => {
    const { id } = this.props.match.params

    this.props.deletePost(id)
    this.props.history.push('/')
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>
    }

    const { title, categories, content } = this.props.post

    return (
      <div>
        <div className="row align-items-center">
          <div className="col">
            <Link to="/">Back to Posts</Link>
          </div>
          <div className="col">
            <button
              className="btn btn-danger float-right"
              onClick={this.onButtonDelete}
            >
              Delete Post
            </button>
          </div>
        </div>

        <h3 className="my-4">{title}</h3>
        <h6 className="mb-4">Categories: {categories}</h6>
        <p>{content}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow)
