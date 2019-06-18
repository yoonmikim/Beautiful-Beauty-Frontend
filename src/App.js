import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import Container from './Container'
import Cart from './Cart'
import Card from './Card'

import { Route, Switch, Redirect } from 'react-router-dom'


class App extends React.Component {

  state = {
    loading: true,
    products: [],
    filteredProducts: [],
    loggedin: false,
    username: "",
    cart: [],
    search: "",
    toggle: false,
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/products")
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
          loading: false,
        })
      })
  }

  toggleSearch = event => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  changeEvent = event => {
  this.setState({
    search: event.target.value
  })
  // console.log(event.target.value)
}

  addToCart = (itemObj) => {
    this.setState({
      cart: [itemObj, ...this.state.cart]
    })
  }

  removeFromCart = (itemObj) => {
    this.setState({
      cart: this.state.cart.filter(item => item.id !== itemObj.id)
    })
  }


  handleChange = (event) => {
      this.setState({
        // [event.target.name]: event.target.value
        username: event.target.value
      })
    }

  handleSubmit = () => {
    this.setState({
      loggedin: !this.state.loggedin
    })
  }


render() {
  // console.log(this.state.cart)
  // console.log(this.state.search)

  if (this.state.loading) {
      return (
        <div>
        <h1>🌺 ...IT'S LOADING ... 🌺</h1>
        <img src="https://media.giphy.com/media/uELtzAhhqpRKg/giphy.gif" />
        <img src="http://i.stack.imgur.com/SBv4T.gif" title="this slowpoke moves" />
        </div>
      )
    } else {
  return (

    <div>
  <Navbar toggle={this.state.toggle} toggleSearch={this.toggleSearch} changeEvent={this.changeEvent} search={this.state.search} />
  <Switch>
    <Route path="/cart" render={(routerProps) => {
      return <Cart
        removeFromCart={this.removeFromCart}
        {...routerProps}
        products={this.state.cart}/>
    }}/>

    <Route path="/home" render={(routerProps) => {
      let allItems = []

      this.state.products.forEach(product => {
        allItems = [...allItems, product]
      })

      return <Fragment>

        <Container
          products={this.state.products.filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase()))} addToCart={this.addToCart}
        />
      </Fragment>

    }}/>

  </Switch>
</div>






      )
    }
  }


}

export default App;


//  <Router>
//   <div className="app">
//     <NavBar />
//     <Route exact path="/" component={Home} />
//     <Route exact path="/signup" component={Signup} />
//     <Route exact path="/login" component={Login} />
//     <Route exact path="/logout" component={Logout} />
//   </div>
// </Router>
//
//  <div className="App">
//  <header className="App-header">
//  <img src={logo} className="App-logo" alt="logo" />
//
//  <Container products={this.state.products} />
//
//  </header>
//  </div>
//       <img src="https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="100" height="100" />
//       <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="100" height="100" />


// <div>
//   <span style={{color: "hotpink"}}>  🌸 Welcome to Beautiful Beauty! 🌸  </span>
//   <div classusername="sidebar" align="center">
//     {
//       this.state.loggedin ? <Fragment> <UserHeader loggedin={this.state.loggedin} username={this.state.username} handleSubmit={this.handleSubmit} /> <Navbar />
//       <Container products={this.state.products} addToCart={this.addToCart} /> <Cart products={this.state.cart} removeFromCart={this.removeFromCart}/> </Fragment>
//       : <LoginForm loggedin={this.state.loggedin} changeLogIn={this.changeLogIn} username={this.state.username} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
//
//     }
//   </div>
//
// </div>
