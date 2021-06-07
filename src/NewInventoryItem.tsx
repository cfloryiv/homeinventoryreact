import React from 'react';
import { Row, Col } from 'react-bootstrap';
export function NewInventoryItem(props: {}) {

    return (
        <Row>
            <Col md={{span: 6, offset: 1}}>
                <h4>New Inventory Item</h4>
            </Col>
        </Row>
    );
}