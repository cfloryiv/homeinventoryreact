import { render } from '@testing-library/react';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Item {
    desc: string,
    cls: string,
    subtype: string,
    qty: number,
    cost: number,
    status: string
}

export class InventoryReport extends React.Component<any, any> {

    constructor(props: { inventoryList: Item[]}) {
        super(props);
    }
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
                        <h4 onClick={() => this.toggleReport()}>Inventory Report</h4>
                    </Col>
                </Row>
                {(this.state.showFlag === true) ? (
                    <Row>
                        <Col md={{ span: 10, offset: 2 }}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Description</th><th>Class</th><th>Type</th><th>Quantity</th><th>Cost</th><th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.inventoryList.map((item: Item) => (
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
                ) : ""}
            </>
        );
    }
}