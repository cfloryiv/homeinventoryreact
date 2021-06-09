import React from 'react';
import { InventoryReport } from './InventoryReport';
import { SummaryReport } from './SummaryReport';
import { NewInventoryItem} from './NewInventoryItem';
import { Jumbotron, Container } from 'react-bootstrap';
import {Values} from './Values';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  state={
    inventory: [
      {
        desc: "Canon R6",
        cls: "Camera",
        subtype: "body",
        qty: 1,
        cost: 2600.00,
        status: "new"
      },
      {
        desc: "4x6 photo paper",
        cls: "Printer",
        subtype: "paper",
        qty: 3,
        cost: 12.00,
        status: "discard"
      },
      {
        desc: "Electric Bike",
        cls: "Bike",
        subtype: "bike",
        qty: 1,
        cost: 3500.00,
        status: "new"
      } 
    ]
  };

  //handleSubmit(desc: string, cls: string, cost: number, status: string) {
  handleSubmit(values: Values) {
    let array=this.state.inventory.concat(values);
    this.setState({inventory: array});
  };

  render() {
    return (
      <Container>
        <Jumbotron style={{backgroundColor: 'cyan' }}>
          <h1>Home Inventory</h1>
          <p>Track inventory of cameras, printers and eBikes</p>
        </Jumbotron>
        <InventoryReport inventoryList= {this.state.inventory} />
        <SummaryReport inventoryList= {this.state.inventory} />
        <NewInventoryItem onFormSubmit={this.handleSubmit}/>
      </Container>
    );
  }
}

export default App;
