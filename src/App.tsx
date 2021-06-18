import React from 'react';
import { Route} from 'react-router-dom';

import {InventoryTable} from './InventoryTable';
import { SummaryReport } from './SummaryReport';
import { NewInventoryItem} from './NewInventoryItem';
import {Header} from './Header';
import {Navigation} from './Navagation';
import {Schedule} from './Schedule';
import { PatientPortal } from './PatientPortal';
import { EmployeePortal } from './EmployeePortal';
import { AdminPortal } from './AdminPortal';
import { PatientProfile } from './PatientProfile';
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
    ],
    token: {
      userid: "cfloryiv",
      password: "pw",
      admin: true,
      doctor: false
    }
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
  Schedulex = () => (
        <Schedule allowUpdate={true}/>
  );

 SessionContext=React.createContext(this.state.token);

  render() {
    return (
      <Container>
       <this.SessionContext.Provider value={this.state.token}>
        <Route path='/' component = {Header} />
        <Route exact path='/' component={Navigation} />
        <Route exact path='/inventoryreport' component={this.InventoryReportx} />
        <Route exact path='/inventorysummary' component ={this.InventorySummaryx}/>
        <Route exact path='/inventoryform' component={this.NewInventoryItemx}/>
        <Route exact path='/schedule' render={() => <Schedule allowUpdate={true}/>}/>
        <Route exact path='/patientportal' component={PatientPortal}/>
        <Route exact path='/employeeportal' component={EmployeePortal}/>
        <Route exact path='/adminportal' component={AdminPortal}/>
        <Route exact path='/patientprofile' component={PatientProfile}/>
        </this.SessionContext.Provider>
      </Container>
    );
  }
}

export default App;
