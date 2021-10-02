import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

  // addMore = () => {
  //   this.setState({ items: [...this.state.items, { id: 5, value: 'Carrot', qty: 5, unit: 'pcs' }] })
  // }
  addMore = (value, quantity) => {
    // this.setState({ items: [...this.state.items, { id: this.state.items.length + 1, value: value, qty: quantity, unit: 'pcs' }] })
    // return () => this.setState({ items: [...this.state.items, { id: this.state.items.length + 1, value: value, qty: quantity, unit: 'pcs' }] })
    return () => {
      // const checkResult = this.state.items.findIndex((element, index, array) => {
      //   if(element.value === value) {
      //     return true
      //   } else {
      //     return false
      //   }
      // }) 
      const checkResult = this.state.items.findIndex(element => element.value === value)  // !==
      
      if(checkResult !== -1) {
        console.log(`this ${value} is add more ${quantity}`)
        let newItems = [...this.state.items]
        newItems[checkResult].qty += quantity
        this.setState({items: newItems })
      } else {
        console.log("It does not exist")
        this.setState({
        items: 
          [...this.state.items, 
            { id: this.state.items.length + 1,
              value: value, qty: quantity, unit: 'pcs'
            }
          ]
        })
      }
    }
  }

  onDeleteItem = (idDelete) => {
    // console.log('delete item')
    console.log(`delete item with ID ${idDelete}`)

    // let indexDelete = this.state.items.findIndex( item => item.id === idDelete)
    // if(indexDelete !== 1) {
    //   let newItems = [...this.state.items]
    //   newItems.splice(indexDelete, 1)
    //   this.setState({ items: newItems })
    // }

    let newItems = this.state.items.filter( item => item.id !== idDelete)
    this.setState({ items: newItems })
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList onDeleteItem={ this.onDeleteItem } items={ this.state.items } />

      {/* <button onClick= {this.addMore}>Click here</button> */}

      {/* <button onClick= { () => this.addMore('carot', 1)}>carot</button>
      <button onClick= { () => this.addMore('yogurt', 2)}>yogurt</button>
      <button onClick= { () => this.addMore('beer', 3)}>beer</button>
      <button onClick= { () => this.addMore('bread', 4)}>bread</button> */}

      <button onClick= { this.addMore('carot', 1)}>carot</button>
      <button onClick= { this.addMore('yogurt', 2)}>yogurt</button>
      <button onClick= { this.addMore('beer', 3)}>beer</button>
      <button onClick= { this.addMore('bread', 4)}>bread</button>
    </div>
  }
}

export default App;