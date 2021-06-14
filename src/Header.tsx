import React from 'react';
import { Jumbotron} from 'react-bootstrap';

export function Header() {
    return (
      <>
        <Jumbotron style={{backgroundColor: 'blue' }}>
        <h1>Home Inventory</h1>
        <p>Track inventory of cameras, printers and eBikes</p>
      </Jumbotron>
     
    </>
    );
}