import { render } from '@testing-library/react';
import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import {InventoryTable} from './InventoryTable';
import {Values} from './Values';


export class InventoryReport extends React.Component<any, any> {

    constructor(props: { inventoryList: Values[]}) {
        super(props);
    }
    state = {
        showFlag: true
    };
    toggleReport() {
        let newFlag = !this.state.showFlag;
        this.setState({ showFlag: newFlag })
    };
    InventoryTablex = () => {
        return (<InventoryTable inventoryList={this.props.inventoryList} />);
    }
    render() {
        return (
            <>
                <Row>
                    <Col md={{ span: 6, offset: 1 }}>
                        <h4 onClick={() => this.toggleReport()}>Inventory Report</h4>
                    </Col>
                </Row>
                {(this.state.showFlag === true) ? (
                    <Link to="/inventoryreport" />
                ) : ""}
            </>
        );
    }
}