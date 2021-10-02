import React from "react";
import ShoppingListItem from './ShoppingListItem';

/* Shopping list component, which renders bunch of ShoppingListItem components inside a HTML ul element based on the data received through items prop */
const ShoppingList = props => {
  return <ul>
    {
      // props.items.map(i => <ShoppingListItem 
      //                                       id={i.id} value={i.value} qty={i.qty} unit={i.unit}
      //                                       onDeleteItem={ props.onDeleteItem } key={ i.id }/>)
      props.items.map(i => <ShoppingListItem {...i} onDeleteItem={ props.onDeleteItem } key={ i.id }/>)
      // javascript three dots: https://dev.to/sagar/three-dots---in-javascript-26ci
      // >>> hữu ích nếu app cập nhật thêm thuộc tính mới trong items 
      // why id là unique key ???
    }
  </ul>
}

export default ShoppingList;