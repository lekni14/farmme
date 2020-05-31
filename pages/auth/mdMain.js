import React, { Component, useState, useContext } from "react";
import { connect } from 'react-redux';
import { Modal, Button } from "react-bootstrap";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

import AddEP from '../../pages/auth/AddEP'
import LoginEP from '../../pages/auth/LoginEP'
import Router from 'next/router'

import { userActions } from '../../actions';
import { PF } from '../../utils/constants'
import initialize from '../../utils/initialize';

import * as yup from "yup";

const loginSchema = yup.object().shape({
    email: yup.string()
        .email('Invalid email')
        .required("This field is required."),
    password: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required("This field is required.")
});
const Btnf = (props) => {
    function handleSetForm() {
        props.handleForm(1)
    }
    return (
        <Button className="btn-block" onClick={handleSetForm} variant="danger">Email & Password</Button>
    )
}
const MdMain = (props) => {

    // edit 27/5/63
    // const { addep, loginep } = useContext(StoreContext);
    const [activeStep, setActiveStep] = React.useState(0);
    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Btnf handleForm={setActiveStep} />;
            case 1:
                return <AddEP onSubmit={handleAddEPSubmit} />;
            case 2:
                return <LoginEP onSubmit={handleLoginSubmit} />;
            default:
                return "Unknown stepIndex";
        }
    }
    // edit 27/5/63

    // const handleHide = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    // const handleSetLogin = () => setLogin(true);
    function handleSetLogin() {
        setShow(true);
        setActiveStep(2);
    }
    function handleSetAddep() {
        setShow(true);
        setActiveStep(1);
    }
    function handleHide() {
        setShow(false);
        setActiveStep(0);
    }
    async function handleAddEPSubmit(data) {
        const { email, password, firstname, lastname } = data;
        if (email && password) {
            const data = {
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
                pf: PF
            }
            props.registerEP(data)
        }
        setShow(false);
    }
    async function handleLoginSubmit(data) {
        console.log(props)
        const { email, password } = data;
        if (email && password) {
            const data = {
                email: email,
                password: password,
                pf: PF
            }
            props.login(data)
        }
        setShow(false);
    }
    return (

        <>
            <Button variant="primary" onClick={handleShow} className="my-2 my-sm-0">เริ่มต้นใช้งาน</Button>
            <Button variant="outline-primary" onClick={handleSetLogin} className="my-2 my-sm-0">เข้าสู่ระบบ</Button>
            <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleHide}>
                <Modal.Body className="bg-secondary shadow card">
                    <Row>
                        <Col>
                            <Card className="bg-secondary border-0">
                                <CardHeader className="bg-transparent pb-5">
                                    <div className="text-muted text-center mt-2 mb-3">
                                        <h2>สนใจสร้างฟาร์มของคุณ</h2>
                                    </div>
                                    <div className="btn-wrapper text-center">

                                    </div>
                                </CardHeader>
                                <CardBody className="px-lg-5 py-lg-3">
                                    <div className="text-center text-muted mb-2">
                                        <small>sign up to see more</small>
                                    </div>
                                    {getStepContent(activeStep)}
                                    {/* {errorMsg && <p className="error">{errorMsg}</p>} */}
                                    {/* {form ? <AddEP isLogin={login} onSubmit={login ? handleLoginSubmit : handleAddEPSubmit} /> : null} */}

                                    <div className="mb-2 mt-1 text-center">
                                        {/* {form ?
                                            <><small className="my-2 d-block">or</small></> :
                                            <Button onClick={handleForm} className="btn-block" variant="danger">Email & Password</Button>

                                        } */}

                                        <Button className="ml-0 btn-block" variant="primary">Continue with Facebook</Button>
                                        <Button className="ml-0 btn-block" variant="light">Continue with Google</Button>

                                    </div>
                                    <div className="text-center text-muted mb-2">
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
                                        {activeStep == 2 ? (
                                            <small>Not on Pinterest yet?<a
                                                className=""
                                                href="#"
                                                onClick={handleSetAddep}
                                            > Sign-up
                                                {/* Forgot password?</small> */}
                                            </a>
                                            </small>

                                        ) : (
                                                <small>ล็อกอินเข้าใช้งานด้วยบัญชี Farmme ของคุณ <a
                                                    className=""
                                                    href="#"
                                                    onClick={handleSetLogin}
                                                > เข้าสู่ระบบ
                                                {/* Forgot password?</small> */}
                                                </a>
                                                </small>
                                            )}

                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

MdMain.getInitialProps = async ({ isServer }) => {
    initialize(isServer);
    // return { isServer }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}
const actionCreators = {
    login: userActions.login,
    // logout: userActions.logout,
    registerEP: userActions.registerEP,
    getUser: userActions.getUser
};

export default connect(mapDispatchToProps, actionCreators)(MdMain)

// const connectedLoginPage = connect(mapState, actionCreators)(MdMain);
// export { connectedLoginPage as MdMain }