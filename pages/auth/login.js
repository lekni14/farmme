import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { Form, InputGroup, FormGroup } from "react-bootstrap";

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            currentUser: null,
            message: "",
            validated: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ validated: false });
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('form')
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        this.setState({ validated: true });
        const { email, password } = this.state;
        auth.signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response)
                this.setState({
                    currentUser: response.user
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
                console.log(error)
                // this.setState({
                //   message: error.message
                // });
            });
    };
    render() {
        const { validated } = this.state;
        return (
            <div className="main-content">
                <div className="header bg-gradient-info py-7 py-lg-8">

                </div>
                <Container className="mt--8 pb-5">
                    <Row className="justify-content-center">
                        <Col lg="5" md="7">
                            <Row>
                                <Col>
                                    <Card className="bg-secondary shadow border-0">
                                        <CardHeader className="bg-transparent pb-5">
                                            <div className="text-muted text-center mt-2 mb-3">
                                                <small>Sign in with</small>
                                            </div>
                                            <div className="btn-wrapper text-center">
                                                <Button
                                                    className="btn-neutral btn-icon"
                                                    color="default"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <span className="btn-inner--icon">
                                                        {/* <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    /> */}
                                                    </span>
                                                    <span className="btn-inner--text">Github</span>
                                                </Button>
                                                <Button
                                                    className="btn-neutral btn-icon"
                                                    color="default"
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <span className="btn-inner--icon">
                                                        {/* <img
                                            alt="..."
                                            src={require("assets/img/icons/common/google.svg")}
                                        /> */}
                                                    </span>
                                                    <span className="btn-inner--text">Google</span>
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-lg-5 py-lg-5">
                                            <div className="text-center text-muted mb-4">
                                                <small>Or sign in with credentials</small>
                                            </div>
                                            <Form noValidate validated={validated} onSubmit={this.handleSubmit} role="form">
                                                <FormGroup className="mb-3">
                                                    <InputGroup className={validated ? 'is_invalid' : ''}>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a username.
                    </Form.Control.Feedback>
                                                        <Form.Control
                                                            type="text"
                                                            name="email"
                                                            placeholder="Username"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                            onChange={this.handleChange}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <InputGroup className={validated ? 'is_invalid' : ''}>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="Password">
                                                                <i className="ni ni-lock-circle-open" />
                                                            </InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a username.
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
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input
                                                        className="custom-control-input"
                                                        id=" customCheckLogin"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor=" customCheckLogin"
                                                    >
                                                        <span className="text-muted">Remember me</span>
                                                    </label>
                                                </div>
                                                <div className="text-center">
                                                    <Button className="my-4" color="primary">
                                                        Sign in
                  </Button>
                                                </div>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="py-4">
                                <Col xs="6">
                                    <a
                                        className="text-light"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <small>Forgot password?</small>
                                    </a>
                                </Col>
                                <Col className="text-right" xs="6">
                                    <a
                                        className="text-light"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <small>Create new account</small>
                                    </a>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default Login