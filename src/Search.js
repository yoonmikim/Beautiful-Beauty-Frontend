import React from 'react';
// import { Input } from 'semantic-ui-react'

class Search extends React.Component {
// const PokemonSearch = ({ search, changeEvent }) => {
  // const { search, changeEvent } = props;
  //render () {}

    render(){
      // console.log("hi", this.state.name)
      return (
        <div className="search-bar">
          <input name="search" value={this.props.search} onChange={this.props.changeEvent} />
        </div>
      )
    }
  }


export default Search;
