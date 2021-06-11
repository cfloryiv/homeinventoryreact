import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Values} from './Values';

export function InventoryTable(props: any) {

return (
<Row>
<Col md={{ span: 10, offset: 1 }}>
    <table className="table">
        <thead>
            <tr>
                <th>Description</th><th>Class</th><th>Type</th><th>Quantity</th><th>Cost</th><th>Status</th>
            </tr>
        </thead>
        <tbody>
            {props.inventoryList.map((item: Values) => (
                <tr key={item.desc}>
                    <td>{item.desc}</td>
                    <td>{item.cls}</td>
                    <td>{item.subtype}</td>
                    <td>{item.qty}</td>
                    <td>{item.cost}</td>
                    <td>{item.status}</td>
                </tr>
            )

            )}
        </tbody>
    </table>
</Col>
</Row>
);
}