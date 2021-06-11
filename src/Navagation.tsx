import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { InventoryTable } from './InventoryTable';

export function Navigation() {

  const history=useHistory();

  function handleLink(link: string) {
    history.push(link);
  }
    return (
      <>
   
         <Row>
         <Col md={{ span: 6, offset: 1 }}>
             <h4 onClick={() => handleLink('/inventoryreport')}>Inventory Report</h4>
         </Col>
     </Row>
     <Row>
         <Col md={{ span: 6, offset: 1 }}>
             <h4 onClick={() => handleLink('/inventorysummary')}>Inventory Summary</h4>
         </Col>
     </Row>
     <Row>
         <Col md={{ span: 6, offset: 1 }}>
             <h4 onClick={() => handleLink('/inventoryform')}>New Inventory Item</h4>
         </Col>
     </Row>
     
    </>
    );
}