import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { Form as Formx, Formik, Field} from 'formik';



interface IProps {
    onFormSubmit: CallableFunction;
}
interface IState {}

interface Values {
    desc: string,
    cls: string,
    cost: number,
    status: string
}
export class NewInventoryItem extends React.Component<IProps, IState> {

    constructor(props: {onFormSubmit: CallableFunction}) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleValidation=this.handleValidation.bind(this);

    }
    handleSubmit(values: Values) {

        this.props.onFormSubmit({values});
        return;
    }
    handleValidation(values: Values): any {
        const errors: any={};
        if (!values.desc) {
            errors.desc="Description cannot be empty";
        }
        if (!values.cls) {
            errors.cls="You must enter a class";
        }
        if (values.cost<=0) {
            errors.cost="Enter a positive cost";
        }
        if (!values.status) {
            errors.status="Enter a status";
        }
        return errors;
    }
    render() {
        
        return (
            <>
                <Row>
                    <Col md={{span: 6, offset: 1}}>
                        <h4>New Inventory Item</h4>
                    </Col>
                </Row>
            <Row>
            <Col md={{span: 6, offset: 1}}>
            <Formik initialValues={{ desc: "", cls: "", cost: 0.00, status: ""}}
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
                        <div>{errors.desc}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Class</Form.Label>
                        <Field className="form-control" name="cls" type="text"/>
                        <div>{errors.cls}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cost</Form.Label>
                        <Field className="form-control" name="cost" type="number"/>
                        <div>{errors.cost}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Field className="form-control" name="status" type="text"/>
                        <div>{errors.status}</div>
                    </Form.Group>
                    <button className="btn btn-primary" type="submit">Save</button>
                    <button className="btn btn-secondary">Cancel</button>
                </Formx>
                  )}
            /></Col>
            </Row>

        </>
        );
    }
}
   