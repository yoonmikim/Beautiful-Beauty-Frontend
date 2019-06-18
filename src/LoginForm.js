import React from 'react';

class LoginForm extends React.Component {

  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.props.handleSubmit} >
          <input placeholder="your yousername goes hither!" value={this.props.username} onChange={this.props.handleChange} />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
