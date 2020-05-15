import React, { Component, useState } from "react";
import { connect } from 'react-redux';
import { Modal, Button } from "react-bootstrap";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

import AddEP from '../../pages/auth/AddEP'
import Router from 'next/router'

import actions from '../../actions';
import { PF } from '../../utils/constants'
import initialize from '../../utils/initialize';



const MdMain = (props) => {

    const [errorMsg, setErrorMsg] = useState('')

    // const handleHide = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState(false);
    const [login, setLogin] = useState(false);
    const handleForm = () => setForm(true);
    // const handleSetLogin = () => setLogin(true);
    const handleUnsetLogin = () => setLogin(false);
    function handleSetLogin() {
        setLogin(true);
        setForm(true);
        setShow(true)
    }
    function handleHide() {
        setShow(false);
        setForm(false);
        setLogin(false);
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
            props.register(data,'register')
        }
    }
    async function handleLoginSubmit(data) {
        console.log(e)
        console.log(props)
        // event.preventDefault()

        // props.registerEP(e)
        //     const { email, password, firstname, lastname } = this.state;
        //     if (email && password) {
        //       const data = {
        //         email: email,
        //         password: password,
        //         pf: PF,
        //         firstname: firstname,
        //         lastname: lastname
        //       }
        //       this.props.registerEP(data)
        //       this.setState({ validated: true });
        //     }
        //   }
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
                                        <h2>สร้างฟาร์มของคุณ</h2>
                                    </div>
                                    <div className="btn-wrapper text-center">

                                    </div>
                                </CardHeader>
                                <CardBody className="px-lg-5 py-lg-3">
                                    <div className="text-center text-muted mb-2">
                                        <small>sign up to see more</small>
                                    </div>
                                    {errorMsg && <p className="error">{errorMsg}</p>}
                                    {form ? <AddEP isLogin={login} onSubmit={login ? handleLoginSubmit : handleAddEPSubmit} /> : null}

                                    <div className="mb-2 mt-1 text-center">
                                        {form ?
                                            <><small className="my-2 d-block">or</small></> :
                                            <Button onClick={handleForm} className="btn-block" variant="danger">Email & Password</Button>

                                        }

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
                                        {!login ? (
                                            <small>Already a member? <a
                                                className=""
                                                href="#"
                                                onClick={handleSetLogin}
                                            > Log in
                                                    {/* Forgot password?</small> */}
                                            </a>
                                            </small>
                                        ) : (
                                                <small>Not on Pinterest yet?<a
                                                    className=""
                                                    href="#"
                                                    onClick={handleUnsetLogin}
                                                > Sign-up
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
// }
MdMain.getInitialProps = async ctx => {
    return initialize(ctx);
}
export default connect(
    state => state,
    actions
)(MdMain);


// const connectedLoginPage = connect(mapState, actionCreators)(Signin);
// export { connectedLoginPage as Signin }