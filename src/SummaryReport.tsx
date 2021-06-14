import React from 'react';
import { SummaryCard } from './SummaryCard';
import { Row } from 'react-bootstrap';
import {Values} from './Values';
export class SummaryReport extends React.Component<any, any> {


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
                        <SummaryCard key={1} cls={"Camera"} inventoryList={this.props.inventoryList}/>
                        <SummaryCard key={2} cls={"Printer"} inventoryList={this.props.inventoryList}/>
                        <SummaryCard key={3} cls={"Bike"} inventoryList={this.props.inventoryList}/>
                    </Row>
            </>
        );
    }
}