import React from 'react';
import {InventoryReport} from './InventoryReport';
import {SummaryReport} from './SummaryReport';
import {NewInventoryItem} from './NewInventoryItem';
import {Jumbotron, Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1>Home Inventory</h1>
        <p>Track inventory of cameras, printers and eBikes</p>
      </Jumbotron>
      <InventoryReport />
      <SummaryReport />
      <NewInventoryItem />
    </Container>
  );
}

export default App;
