import React from 'react';

class Card extends React.Component {

  render(){
    // console.log(this.props.product)
    return (
      <div className="card" align="center">
        <div className="nav-item">
         <img className="image" src={this.props.product.image_link} width="300"
         height="300"/>
        </div>
        <h3 style={{color: "hotpink"}}>{this.props.product.name} 💄 </h3>
        <p> from Brand: <strong style={{color: "violet"}}><i>{this.props.product.brand} ❤ ♡ ♥ </i></strong></p>
        <strong style={{color: "#FF69B4"}}>Price: ${this.props.product.price}  </strong>
        <a href={this.props.product.product_link}>Click to Product Link</a>
        <button onClick={() => this.props.action(this.props.product)} >{this.props.cartMode ? "Remove from cart" : "Add to cart"}</button>
        <br/><br/>
      </div>
    )
  }

}

export default Card;

//        <button onClick={() => this.props.addToCart(this.props.product)} >{this.props.cartMode ? "Remove from cart" : "Add to cart"}</button>
