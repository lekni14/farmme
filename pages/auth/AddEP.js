import { Form, InputGroup, FormGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";


const addEPSchema = yup.object().shape({
    firstname: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required("This field is required."),
    lastname: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required("This field is required."),
    email: yup.string()
        .email('Invalid email')
        .required("This field is required."),
    password: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required("This field is required.")
});
const AddEPForm = ({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    isValid,
    errors,
}) => (
        <Form noValidate onSubmit={handleSubmit} role="form">
            <div className="my-2 text-center">
                <FormGroup className="mb-2">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend" className={!!errors.firstname ? 'is-invalid' : ''}><i className="ni ni-single-02" /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control.Feedback type="invalid">
                            {errors.firstname}
                        </Form.Control.Feedback>
                        {/* {addEPForm.errors.firstname} */}
                        <Form.Control
                            type="text"
                            name="firstname"
                            placeholder="Firstname"
                            value={values.firstname}
                            onChange={handleChange}
                            // isValid={touched.firstname && !errors.firstname}
                            isInvalid={!!errors.firstname}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup className="mb-2">
                    <InputGroup>
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroupPrepend" className={!!errors.lastname ? 'is-invalid' : ''}><i className="ni ni-single-02" /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control.Feedback type="invalid">
                            Please choose a Lastname.
                                                             </Form.Control.Feedback>
                        <Form.Control
                            type="text"
                            name="lastname"
                            placeholder="Lastname"
                            value={values.lastname}
                            onChange={handleChange}
                            // isValid={touched.lastname && !errors.lastname}
                            isInvalid={!!errors.lastname}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup className="mb-2">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend" className={!!errors.email ? 'is-invalid' : ''}><i className="ni ni-email-83"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control.Feedback type="invalid">
                            Please choose a Email.
                        </Form.Control.Feedback>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            value={values.email}
                            onChange={handleChange}
                            // isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup className="mb-2">
                    <InputGroup >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Password" className={!!errors.password ? 'is-invalid' : ''}>
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
                            aria-describedby="password"
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                        />
                    </InputGroup>
                </FormGroup>
            </div>
            <button type="submit" className="btn btn-block btn-danger">สมัครสมาชิก</button>
        </Form>
    )

const LoginEPForm = ({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    isValid,
    errors,
}) => (
        <Form noValidate onSubmit={handleSubmit} role="form">
            <div className="my-2 text-center">
                <FormGroup className="mb-2">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend" className={!!errors.email ? 'is-invalid' : ''}><i className="ni ni-email-83"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control.Feedback type="invalid">
                            Please choose a Email.
                            </Form.Control.Feedback>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            value={values.email}
                            onChange={handleChange}
                            validate={validateEmail}
                            // isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup className="mb-2">
                    <InputGroup >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="Password" className={!!errors.password ? 'is-invalid' : ''}>
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
                            aria-describedby="password"
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                        />
                    </InputGroup>
                </FormGroup>
            </div>
            <button type="submit" className="btn btn-block btn-danger">เข้าสู่ระบบ</button>
        </Form>
    )

const AddEP = (props) => {
    const { isLogin, onSubmit } = props
    return (
        <>
            {isLogin ? <Formik component={LoginEPForm} initialValues={{ email: '', password: ''}} validationSchema={addEPSchema}
                onSubmit={onSubmit} /> : (
                    <Formik component={AddEPForm} initialValues={{ email: '', password: '',firstname: '',lastname: '' }} validationSchema={addEPSchema}
                        onSubmit={onSubmit} />
                )}
        </>
    )

}
export default AddEP