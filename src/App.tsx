import React from 'react';
import axios from 'axios';
import { Route} from 'react-router-dom';

import { InventoryReport } from './InventoryReport';
import {InventoryTable} from './InventoryTable';
import { SummaryReport } from './SummaryReport';
import { NewInventoryItem} from './NewInventoryItem';
import {Header} from './Header';
import {Navigation} from './Navagation';
import { Container } from 'react-bootstrap';
import {Values} from './Values';

import API from './api';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  state={
    inventory: [
      {desc: "", cls: "", subtype: "", qty: 0, cost: 0, status: ""}
    ]
  };

  //handleSubmit(desc: string, cls: string, cost: number, status: string) {
  handleSubmit(values: Values) {
    let array=this.state.inventory.concat(values);
    this.setState({inventory: array});
    API.post(`homeapi/inventorys`, values)
      .then(res=> {
        console.log(res.data);
      });
  };

  componentDidMount() {
    API.get(`homeapi/inventorys`)
      .then(res=> {
        const inventory=res.data;
        this.setState({inventory: inventory});
      }
        )
  }
  InventoryReportx = () => (
    <InventoryTable inventoryList= {this.state.inventory} />
  );
  InventorySummaryx = () => (
    <SummaryReport inventoryList={this.state.inventory} />
  );
    NewInventoryItemx = () => (
      <NewInventoryItem onFormSubmit={this.handleSubmit} />
    );

  render() {
    return (
      <Container>
       
        <Route path='/' component = {Header} />
        <Route exact path='/' component={Navigation} />
        <Route exact path='/inventoryreport' component={this.InventoryReportx} />
        <Route exact path='/inventorysummary' component ={this.InventorySummaryx}/>
        <Route exact path='/inventoryform' component={this.NewInventoryItemx}/>
      </Container>
    );
  }
}

export default App;
