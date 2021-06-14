
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Values} from './Values';

export function SummaryCard(props: { cls: string, inventoryList: Values[] }) {
    // filter out class items
    let items=props.inventoryList.filter((item: Values) => item.cls===props.cls);
    // build subtotals by type
    let subtotals=items.reduce((acc: any, item) => {
        let ndx=acc.findIndex((stx: any) => stx.subtype===item.subtype);
        let st: {subtype: string, qty: number, cost: number};
        if (ndx===-1) {
            st={subtype: item.subtype, qty: item.qty, cost: item.cost};
            acc.push(st);
        } else {
            st=acc[ndx];
            st['qty']+=item.qty;
            st['cost']+=item.cost;
            acc[ndx]=st;
        }
        return acc;
    }, []);
  
    // reduce to totals
    let totals=items.reduce((acc: any, item) => {
        acc['qty']+=item.qty;
        acc['cost']+=item.cost;
        return acc;
    }, {qty: 0, cost: 0});

    return (
        <>
            <Row>
                <Col md={{span: 6, offset: 1}}>
                
                    <table className="table">
                        <thead>
                            <tr>
                            <th>{props.cls}</th><th>Type</th><th>Quantity</th><th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subtotals.map((st: any) => (
                                <tr>
                                    <td></td>
                                <td>{st.subtype}</td>
                                <td>{st.qty}</td>
                                <td>{st.cost}</td>
                                </tr>
                            ))}
                            <tr>
                                <td></td><td>Total</td><td>{totals.qty}</td><td>{totals.cost}</td>
                            </tr>
                        </tbody>
                    </table>
                
                </Col>
            </Row>
        </>
    );
}