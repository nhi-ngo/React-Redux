import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createPost } from '../actions'
import PostForm from './PostForm'

class PostCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createPost(formValues)
  }

  render() {
    return (
      <div>
        <h4>Create a Post</h4>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { createPost })(PostCreate)
