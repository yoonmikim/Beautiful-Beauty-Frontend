import React from 'react'
import Card from './Card'
import Container from './Container'

class Cart extends React.Component {
  render(){
    // console.log(this.props.products);

    return (
      <div className="cart">
        <h1>Your cart: </h1>

        {
          this.props.products.map(product => <Card key={product.id} product={product} cartMode={true} action={this.props.removeFromCart} />)
        }
      </div>
    )
  }
}

export default Cart

//<Card cartMode={true} action={this.props.removeFromCart} products={this.props.products}/>
