import React from 'react'
import picture from './logo.gif';
import { Link, Redirect, withRouter } from 'react-router-dom'
import Search from './Search';
import UserHeader from './UserHeader'

class Navbar extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div className="navbar" >
          <Link to="/home">
            <div>
              <img
                className="logo"
                src="https://image.flaticon.com/icons/svg/1005/1005735.svg"
                alt="logo"
                width="100"
                height="100"
              /> 🌸 Welcome to Beautiful Beauty! 🌸
              <img src="logo.gif" />
            </div>
          </Link>

          <div className="account" align="right" >

                  <button onClick={this.props.toggleSearch}>
                    <img className="button-icon" src="https://www.flaticon.com/premium-icon/icons/svg/954/954591.svg" alt="icon" width="50" height="50" /><br/>
                    Search
                    {this.props.toggle ? <Search changeEvent={this.props.changeEvent} search={this.props.search}/> : null }
                  </button>
                  <button>
                  <img className="button-icon" src="https://image.flaticon.com/icons/svg/1040/1040216.svg" alt="icon" width="50" height="50" />
                    <br/>
                    Notifcations
                  </button>
                  <Link to="/login">
                  <button onClick={this.props.clickLog}>
                    <img className="button-icon" src="https://image.flaticon.com/icons/svg/1029/1029183.svg" alt="icon" width="50" height="50" /><br/>
                    Account
                    {this.props.loggedin ? <UserHeader loggedin={this.props.loggedin} username={this.props.username} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} /> : null }
                    {/* this.props.loggedin ? <Redirect to="/home"/> : null */}
                  </button>
                  </Link>
                  <Link to="/cart">
                  <button>
                  <img className="button-icon" src="https://image.flaticon.com/icons/svg/138/138252.svg" alt="icon" width="50" height="50" /><br/>
                  Cart
                  </button>
                  </Link>
                </div>



      </div>
    )
  }
}

export default withRouter(Navbar)

// <button onClick={() => this.props.changeView("sell")}>Sell on Petsy</button>
//                 src="https://static.thenounproject.com/png/2612027-200.png"

// <SearchBar changeFilter={this.props.changeFilter} />
// <AccountControlModule changeView={this.props.changeView} />
//<img src="https://flamingtext.com/net-fu/proxy_form.cgi?script=memories-anim-logo&text=Beautiful+Beauty&_loc=generate&imageoutput=true" />
