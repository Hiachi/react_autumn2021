import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs. */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

    // setTimeout(() => {
    //   // this.state = { items: []}  // NOTE: not work ??? method change >>> attr change mà
    //   // this.setState({ items: [] })  // fix above bug
    //   this.setState({ items: [...this.state.items, { id: 5, value: 'Carrot', qty: 5, unit: 'pcs' }] })
    // }, 2000);

    // this.addMore = this.addMore.bind(this)
  }

  // addMore() {
  addMore = () => {
    this.setState({ items: [...this.state.items, { id: 5, value: 'Carrot', qty: 5, unit: 'pcs' }] })
  }

  render()
  // trigger render !!! when props or state change
  // But props often not change
  {
    const { applicationDescription, applicationName } = this.props;  // from index.js
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      {/* <button onClick= {() => console.log("clicked")}>Click here</button> */}
      {/* <button onClick= {() => {
        this.setState({ items: [...this.state.items, { id: 5, value: 'Carrot', qty: 5, unit: 'pcs' }] })
      }}>Click here</button> */}
      
      {/* <button onClick= {this.addMore()}>Click here</button>  passing a value / executive function */}
      {/* passing a refer function, NOTE: but not refer class, it refer event >>> bug this  */}
      <button onClick= {this.addMore}>Click here</button>
      <button onClick= { () => this.addMore('para')}>Click here</button>
    </div>
  }

  // NOTE: arrow function can: 1.use for bind, 2.transmit arguement for refer function without excutive
  // read document again ???
}

export default App;