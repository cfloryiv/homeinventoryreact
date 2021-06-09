import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import { Form as Formx, Formik, Field, ErrorMessage } from 'formik';
import {Values} from './Values';


interface IProps {
    onFormSubmit: CallableFunction;
}
interface IState { }


export class NewInventoryItem extends React.Component<IProps, IState> {

    constructor(props: { onFormSubmit: CallableFunction }) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidation = this.handleValidation.bind(this);

    }
    state = {
        showFlag: true
    };
    toggleReport() {
        let newFlag = !this.state.showFlag;
        this.setState({ showFlag: newFlag })
    };
    handleSubmit(values: Values) {
        this.props.onFormSubmit(values);
        //this.props.onFormSubmit(values.desc, values.cls, values.cost, values.status);
        this.setState({ showFlag: false });
        return;
    }
    handleValidation(values: Values): any {
        const errors: any = {};
        if (!values.desc) {
            errors.desc = "Description cannot be empty";
        }
        if (!values.cls) {
            errors.cls = "You must enter a class";
        }
        if (!values.subtype) {
            errors.subtype="You must enter a type";
        }
        if (values.qty<=0) {
            errors.qty="Enter a postive quantity";
        }
        if (values.cost <= 0) {
            errors.cost = "Enter a positive cost";
        }
        if (!values.status) {
            errors.status = "Enter a status";
        }
        return errors;
    }
    render() {

        return (
            <>
                <Row>
                    <Col md={{ span: 6, offset: 1 }}>
                        <h4 onClick={() => this.toggleReport()}>New Inventory Item</h4>
                    </Col>
                </Row>

                {(this.state.showFlag === true) ? (
                    <Row>
                        <Col md={{ span: 4, offset: 2 }}>
                            <Card style={{ backgroundColor: 'lightgoldenrodyellow' }}>
                                <h5 style={{ backgroundColor: 'orange' }}>New Item Form</h5>
                                <Col md={{ span: 10, offset: 1 }}>
                                    <Formik initialValues={{ desc: "", cls: "", subtype: "", qty: 1, cost: 1.00, status: "" }}
                                        onSubmit={this.handleSubmit}
                                        validate={this.handleValidation}
                                        render={({
                                            errors,
                                            touched,
                                            values,
                                            handleBlur,
                                            handleChange,
                                            handleSubmit
                                        }) => (

                                            <Formx>

                                                <Form.Group>
                                                    <Form.Label>Description</Form.Label>
                                                    <Field className="form-control" name="desc" type="text" />
                                                    <ErrorMessage component="span" name="desc" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Class</Form.Label>
                                                    <Field className="form-control" name="cls" type="text" />
                                                    <ErrorMessage component="span" name="cls" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Type</Form.Label>
                                                    <Field className="form-control" name="subtype" type="text" />
                                                    <ErrorMessage component="span" name="subtype" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Quantity</Form.Label>
                                                    <Field className="form-control" name="qty" type="number" />
                                                    <ErrorMessage component="span" name="qty" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Cost</Form.Label>
                                                    <Field className="form-control" name="cost" type="number" />
                                                    <ErrorMessage component="span" name="cost" />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Status</Form.Label>
                                                    <Field className="form-control" name="status" type="text" />
                                                    <ErrorMessage component="span" name="status" />
                                                </Form.Group>
                                                <button className="btn btn-primary" type="submit">Save</button>
                                                <button className="btn btn-secondary" onClick={() => this.setState({ showFlag: false })}>Cancel</button>
                                            </Formx>
                                        )}
                                    /></Col>
<h5 style={{ backgroundColor: 'orange' }}>_</h5>
                            </Card>
                        </Col>
                    </Row>
                ) : ""}
            </>
        );
    }
}
