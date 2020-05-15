import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Modal, Form, InputGroup, FormGroup, Button } from "react-bootstrap";

export default class AddEP extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            validated: false,
        };
    }
    render() {
        const { validated } = this.state;
        return (
            <>
                <div className="my-2 text-center">                    
                    <FormGroup className="mb-2">
                        <InputGroup className={validated ? 'is_invalid' : ''}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend"><i className="ni ni-email-83"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control.Feedback type="invalid">
                                Please choose a Email.
                                                            </Form.Control.Feedback>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                                onChange={this.handleChange}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-2">
                        <InputGroup className={validated ? 'is_invalid' : ''}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="Password">
                                    <i className="ni ni-lock-circle-open" />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control.Feedback type="invalid">
                                Please choose a password.
                                                            </Form.Control.Feedback>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                aria-describedby="Password"
                                required
                                onChange={this.handleChange}
                            />

                        </InputGroup>
                    </FormGroup>
                </div>
            </>
        );
    }
}
