import React from 'react';
import { InventoryReport } from './InventoryReport';
import { SummaryReport } from './SummaryReport';
import { NewInventoryItem } from './NewInventoryItem';
import { Jumbotron, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  state={
    "inventory": [
      {
        desc: "Canon R6",
        cls: "Camera",
        cost: 2600.00,
        status: "new"
      },
      {
        desc: "4x6 photo paper",
        cls: "Printer",
        cost: 12.00,
        status: "discard"
      },
      {
        desc: "Electric Bike",
        cls: "Bike",
        cost: 3500.00,
        status: "new"
      } 
    ]
  };
  
  handleSubmit() {
    console.log("Create new item");
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Home Inventory</h1>
          <p>Track inventory of cameras, printers and eBikes</p>
        </Jumbotron>
        <InventoryReport inventoryList= {this.state.inventory} show={true}/>
        <SummaryReport />
        <NewInventoryItem onFormSubmit={this.handleSubmit}/>
      </Container>
    );
  }
}

export default App;
