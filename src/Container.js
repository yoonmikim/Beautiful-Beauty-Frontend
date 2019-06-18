import React from 'react';
import Card from './Card'

class Container extends React.Component {

  render() {
    return (
      <div className="container">
      {
        this.props.products.map(product => <Card key={product.id} product={product} cartMode={false} action={this.props.addToCart}/>)
      }
      </div>
    )
  }

}

export default Container;
