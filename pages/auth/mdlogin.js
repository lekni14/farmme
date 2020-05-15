import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Modal, Form, InputGroup, FormGroup, Button } from "react-bootstrap";

export default class MdLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            email: "",
            password: "",
            currentUser: null,
            message: "",
            validated: false,
            isActive: false
        };
    }
    handleShow = e => {
        this.setState({
            show: true
        });
    };
    handleHide = e => {
        this.setState({
            show: false
        });
    };
    render() {
        const { validated } = this.state;
        return (
            <>
                <Button color="primary" onClick={this.handleShow} className="my-2 my-sm-0">เริ่มต้นใช้งาน</Button>
                <Modal aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} onHide={this.handleHide}>
                    <Modal.Body className="bg-secondary shadow card">
                        <Row>
                            <Col>
                                <Card className="bg-secondary border-0">
                                    <CardHeader className="bg-transparent pb-5">
                                        <div className="text-muted text-center mt-2 mb-3">
                                            <h2>สร้างฟาร์มของคุณ</h2>
                                        </div>
                                        <div className="btn-wrapper text-center">
                                            {/*<Button
                                                className="btn-neutral btn-icon"
                                                color="default"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <span className="btn-inner--icon">
                                                     <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    /> 
                                                </span>
                                                <span className="btn-inner--text">Github</span>
                                            </Button>*/}
                                            {/* <Button
                                                className="btn-neutral btn-icon"
                                                color="default"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <span className="btn-inner--icon">
                                                     <img
                                            alt="..."
                                            src={require("assets/img/icons/common/google.svg")}
                                        /> 
                                                </span>
                                                <span className="btn-inner--text">Google</span>
                                            </Button>*/}
                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-2">
                                            <small>sign up to see more</small>
                                        </div>
                                        <Form noValidate validated={validated} onSubmit={this.handleSubmit} role="form">
                                            {/* <FormGroup className="mb-3">
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
                                            </div> */}
                                            <div className="my-2 text-center">
                                                <FormGroup className="mb-2">
                                                    <InputGroup className={validated ? 'is_invalid' : ''}>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="inputGroupPrepend"><i className="ni ni-single-02" /></InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a Firstname.
                                                            </Form.Control.Feedback>
                                                        <Form.Control
                                                            type="text"
                                                            name="firstname"
                                                            placeholder="Firstname"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                            onChange={this.handleChange}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="mb-2">
                                                    <InputGroup className={validated ? 'is_invalid' : ''}>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="inputGroupPrepend"><i className="ni ni-single-02" /></InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a Lastname.
                                                            </Form.Control.Feedback>
                                                        <Form.Control
                                                            type="text"
                                                            name="lastname"
                                                            placeholder="Lastname"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                            onChange={this.handleChange}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                                <FormGroup className="mb-2">
                                                    <InputGroup className={validated ? 'is_invalid' : ''}>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
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
                                            <div className="mb-2 mt-1 text-center">
                                                <Button className="btn-block" variant="danger">Email & Password</Button>
                                                <Button className="ml-0 btn-block" variant="primary">Continue with Facebook</Button>
                                                <Button className="ml-0 btn-block" variant="light">Continue with Google</Button>

                                            </div>
                                            <div className="text-center text-muted mb-3">
                                                <small className="text-light">By continuing, you agree to Pinterest's Terms of
                                                <a
                                                        className=""
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
                                                    > Service, Privacy Policy
                                                    {/* Forgot password?</small> */}
                                                    </a></small>
                                            </div>
                                            <div className="text-center text-muted pt-5">
                                                <small>Already a member? <a
                                                    className=""
                                                    href="#pablo"
                                                    onClick={e => e.preventDefault()}
                                                > Log in
                                                    {/* Forgot password?</small> */}
                                                </a>
                                                </small>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* <Row className="py-4">
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
                        </Row> */}
                    </Modal.Body>
                    {/* <Modal.Footer className="bg-secondary shadow card">
                        <Button variant="secondary" onClick={this.handleHide}>
                            Close
            </Button>
                        <Button variant="primary" onClick={this.handleHide}>
                            Save Changes
            </Button>
                    </Modal.Footer> */}
                </Modal>
            </>
        );
    }
}
