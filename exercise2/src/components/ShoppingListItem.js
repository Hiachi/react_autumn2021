import React from "react";
import styles from './ShoppingListItem.module.css';
import cx from 'classnames';

const ShoppingListItem = props => {
  return <li className={ cx(styles.flex, styles.item) }>
    <div className={ cx(styles.flex, styles.itemQtyUnit) }>
      <div style={{width: '20px'}}>
        { props.qty }
      </div>
      <div style={{width: '20px'}}>
        { props.unit }
      </div>
    </div>
    <div>
      { props.value }
    </div>
    <button onClick= { () => props.onDeleteItem(props.id)}>X</button>
  </li>
}

export default ShoppingListItem;