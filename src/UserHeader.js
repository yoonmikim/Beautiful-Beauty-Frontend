import React from 'react';

class UserHeader extends React.Component {
  render(){
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.username}!</h3>
        <button onClick={this.props.handleSubmit} >Logout</button>
      </div>
    );
  }
}

export default UserHeader;
