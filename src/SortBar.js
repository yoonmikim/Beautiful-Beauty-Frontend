import React from 'react';

const SortBar = (props) => {

  const handleChange = (event) => {
    if (event.target.value === "name") {
      props.sortByName()
    } else if (event.target.value === "brand") {
      props.sortByBrand()
    } else {
      props.defaultSort()
    }
  }

//   const handleChange = (event) => {
//     switch(event.target.value) {
//   case "name":
//     props.sortByName()
//     break;
//   case "brand":
//     props.sortByBrand()
//     break;
//   default:
//     // code block
//     props.defaultSort()
// }
//   }

  return (
    <div className="" align="left">
    <select onChange={handleChange}>
      <option>Default</option>
      <option value="name">Sort By Alphabet</option>
      <option value="brand">Sort By Brand</option>
    </select>
    </div>
  )
};

export default SortBar

//<button onClick={props.filteredPokemons}>Filter Button</button>
