import React from 'react';
import { SummaryCard } from './SummaryCard';
import { Col, Row } from 'react-bootstrap';

export class SummaryReport extends React.Component {
    state = {
        showFlag: true
    };
    toggleReport() {
        let newFlag = !this.state.showFlag;
        this.setState({ showFlag: newFlag })
    };
    render() {
        return (
            <>
                <Row>
                    <Col md={{ span: 6, offset: 1 }}>
                        <h4 onClick={() => this.toggleReport()}>Summary Report</h4>
                    </Col>
                </Row>
                {(this.state.showFlag === true) ? (
                    <Row>
                        <SummaryCard type={"camera"} />
                        <SummaryCard type={"printer"} />
                        <SummaryCard type={"eBike"} />
                    </Row>
                ) : ""}
            </>
        );
    }
}