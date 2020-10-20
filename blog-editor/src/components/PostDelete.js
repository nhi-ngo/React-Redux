import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { fetchPost, deletePost } from '../actions'

class PostDelete extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  renderActions() {
    const { id } = this.props.match.params

    const onButtonDelete = () => {
      this.props.history.push('/')
      this.props.deletePost(id)
    }

    return (
      <div className="mt-3">
        <button className="btn btn-danger mr-2" onClick={onButtonDelete}>
          Delete
        </button>
        <Link to="/" className="btn btn-primary">
          Cancel
        </Link>
      </div>
    )
  }

  renderContent() {
    if (!this.props.post) {
      return 'Are you sure you want to delete this post?'
    }

    return `Are you sure you want to delete the post with title "${this.props.post.title}"?`
  }

  // onDismiss = () => {
  //   this.props.history.push('/')
  // }

  render() {
    return (
      <Modal
        content={this.renderContent()}
        actions={this.renderActions()}
        // onDismiss={this.onDismiss()}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDelete)
