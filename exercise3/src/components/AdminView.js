import React, { useState } from 'react'
import styles from './AdminView.module.css';

export default function AdminView(props) {

  const [newItemName, setNewItemName] = useState("");
  const [newItemManufacture, setNewItemManufacture] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");

  const addNewItem = () => {
    props.addNewItem(newItemName, newItemManufacture, newItemCategory, newItemPrice);
  }

  const onDeleteItemClick = (itemId) => {
    console.log("clicked delete for item id " + itemId);
    props.deleteItem(itemId);
  }

  return (
    <div>
      <div>
          <h1>Add new item</h1>
          <div>
            <div className={ styles.context }>Name</div>
            <div style={{float: "left"}}>
              <input type="text" onChange={ (event) => setNewItemName(event.target.value) } />
            </div>
          </div>
          <div style={{clear: "both"}}>
            <div className={ styles.context }>Manufacture </div>
            <div style={{float: "left"}}>
              <input type="text" onChange={ (event) => setNewItemManufacture(event.target.value) } />
            </div>
          </div>
          <div style={{clear: "both"}}>
            <div className={ styles.context }>Category</div> 
            <div style={{float: "left"}}>
              <input type="text" onChange={ (event) => setNewItemCategory(event.target.value) } />
            </div>
          </div>
          <div style={{clear: "both"}}>
            <div className={ styles.context }>Price</div> 
            <div style={{float: "left"}}>
              <input type="text" onChange={ (event) => setNewItemPrice(event.target.value) } />
            </div>
          </div>
          <div style={{clear: "both", marginLeft:"160px", marginTop:"10px" }}>
            <button onClick={ addNewItem }>Add Item</button>
          </div>
        </div>

        <div>
          <button className={ styles.btn } onClick={ props.disableAdminMode }>Disable Admin Mode</button>
        </div>

        <h1>List of items</h1>
        { props.items.map((item, index) =>
          <div key={index}>
            <button onClick={() => onDeleteItemClick(item.id)}>X</button> {item.name}, {item.manufacture}, {item.category}, {item.price}
          </div>)}
    </div>
  )
}
