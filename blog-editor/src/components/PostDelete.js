import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { fetchPost, deletePost } from '../actions'

class PostDelete extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  renderActions() {
    const onButtonDelete = () => {
      this.props.history.push('/')
      this.props.deletePost(this.props.match.params.id)
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

  render() {
    return (
      <Modal
        title="Delete Post"
        content={this.renderContent()}
        actions={this.renderActions()}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDelete)
