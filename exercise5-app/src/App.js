import React from 'react';
// import data from './data.json'  // nên update file data.json mới từ ex5 API 
import SearchView from './components/SearchView';
import AdminView from './components/AdminView';
import styles from './App.module.css';
import axios from 'axios';

import { Container, Row, Button } from 'reactstrap';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      // items: data.items,
      items: [],
      productSearchString: "",
      adminModeActive: false,
    }
    console.log("constructor")
  }

  componentDidMount() {
    console.log("DidMount")
    axios.get('http://localhost:5000/products')
    .then((res) => {
      // console.log(res)
      this.setState({ items: res.data})
    })
    .catch(err => console.log(err))
  }

  onSearchFieldChange = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  // addNewItem = (name, manufacture, category, price) => {
  //   let newItems = [...this.state.items];
  //   newItems.push({
  //     id: newItems.length + 1,
  //     name: name,
  //     manufacture: manufacture,
  //     category: category,
  //     price: price
  //   });
    
  //   this.setState({
  //     items: newItems
  //   });
  // }
  addNewItem = (e) => {
    const formAddNewItem = document.querySelector('form')
    const formData = new FormData(formAddNewItem)
    let obj = {}
    formData.forEach( (value, key) => obj[key] = value)  // !!!
    // const formDataJson = JSON.stringify(obj)

    axios({
      method: 'post',
      url: 'http://localhost:5000/products',
      data: obj,
    })
    .then(res => {
      alert("Posted");
      // if (res.status===200) this.setState({ items: res.data })
      this.componentDidMount()
    })
    .catch(err => console.log(err))
    e.preventDefault() 
  }

  // deleteItem = idProduct => this.setState({items: this.state.items.filter(item => item.idProduct != idProduct)})
  deleteItem = (idProduct, event) => {
    axios({
      method: 'delete',
      url: `http://localhost:5000/products/${idProduct}`,
    })
    .then(res => {
      alert("Deleted");
      this.componentDidMount()
    })
    .catch(err => console.log(err))
    // event.preventDefault()  // !!! không hoạt động 
  }

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
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
              // items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
              items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
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