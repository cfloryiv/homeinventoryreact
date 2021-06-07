import React from 'react';
import {Col, Row} from 'react-bootstrap';

export function SummaryReport(props: {}) {
    return (
        <Row>
            <Col md={{span: 6, offset: 1}}>
            <h4>Summary Report</h4>
            </Col>
        </Row>
    );
}