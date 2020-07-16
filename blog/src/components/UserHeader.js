import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) return null;

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);

// mapStateToProps takes state as its only argument

// class UserHeader extends Component {
//   componentDidMount() {
//     this.props.fetchUser(this.props.userId);
//   }

//   render() {
//     const user = this.props.users.find(user => user.id === this.props.userId);
//     if (!user) return null;
//     return <div className = "header">{user.name}</div>;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     users: state.users
//   };
// };

// export default connect(mapStateToProps, {fetchUser})(UserHeader);
