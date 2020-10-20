import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPost } from '../actions'
import PostDelete from './PostDelete'

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
        <div className="row align-items-center">
          <div className="col">
            <Link to="/">Back to Posts</Link>
          </div>
          <div className="col">
            <div
              className="btn float-right"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <Link to={`/posts/delete/${id}`}>Delete Post</Link>
            </div>
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

export default connect(mapStateToProps, { fetchPost })(PostShow)
