import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export function SummaryCard(props: { type: string }) {
    return (
        <>
            <Row>
                <Col md={{span: 4, offset: 2}}>
                <Card>
                    <h5>{props.type}</h5>
                </Card>
                </Col>
            </Row>
        </>
    );
}