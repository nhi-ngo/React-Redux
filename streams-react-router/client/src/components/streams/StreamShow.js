import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return (
        <div className="ui segment">
          <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p />
        </div>
      );
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
