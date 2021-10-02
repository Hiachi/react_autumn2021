import React from 'react';
import data from './data.json'
import SearchView from './components/SearchView';
import AdminView from './components/AdminView';
import styles from './App.module.css';

import { Container, Row, Button } from 'reactstrap';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
      adminModeActive: false,
    }
    console.log("constructor")
  }

  onSearchFieldChange = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, manufacture, category, price) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      manufacture: manufacture,
      category: category,
      price: price
    });

    this.setState({
      items: newItems
    });
  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
    console.log("render");
    let output =
      <>
        <div>
          <input className={ styles.search } type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString } 
            placeholder="Search products"/>
        </div>

        <Container>
          <Row>
            <SearchView
              items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
            />
          </Row>
        </Container>

        <div>
          <button className={ styles.btn } onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
        </div>
      </>

    if(this.state.adminModeActive) {
      output = <AdminView
                  disableAdminMode={() => this.setState({adminModeActive: false}) }
                  addNewItem={ this.addNewItem }
                  items={ this.state.items }
                  deleteItem={ this.deleteItem }
               />;
    }

    return (
      <>
        { output }
      </>
    )
  }
}

export default App;