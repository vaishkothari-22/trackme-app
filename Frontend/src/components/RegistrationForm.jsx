import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Col, Row, Card } from "react-bootstrap";
import { saveUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import "../css/Registration.css";

export function RegistrationForm() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [apiMessage, setApiMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setApiMessage("");

    if (Object.keys(errors).length !== 0) return;

    try {
      const result = await saveUser(formValues);
      if (result?.message) {
        setApiMessage("Registration successful");
        setIsSubmit(true);
      } else {
        setFormErrors({ api: "Registration failed" });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setFormErrors({ api: "Something went wrong" });
    }
  };

  useEffect(() => {
    if (isSubmit) {
      const timer = setTimeout(() => navigate("/home"), 1000);
      return () => clearTimeout(timer);
    }
  }, [isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) errors.username = "Username is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Invalid email format!";
    if (!values.password) errors.password = "Password is required!";
    else if (values.password.length < 4) errors.password = "Password must be more than 4 characters";
    else if (values.password.length > 10) errors.password = "Password cannot exceed 10 characters";
    return errors;
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

  return (
    <Row className="justify-content-center mt-5">
      <Col md={6}>
        <Card>
          <Card.Body>
            {apiMessage && <Alert variant="success">{apiMessage}</Alert>}
            {formErrors.api && <Alert variant="danger">{formErrors.api}</Alert>}
            <h1 className="text-center mb-4">Register New Account</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label><b>Username :</b></Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={formValues.username}
                  onChange={handleChange}
                  className="e1"
                />
                <Form.Text className="text-danger">{formErrors.username}</Form.Text>
              </Form.Group>
              <br />
              <Form.Group controlId="formEmail">
                <Form.Label><b>Email :</b></Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="e1"
                />
                <Form.Text className="text-danger">{formErrors.email}</Form.Text>
              </Form.Group>
              <br />
              <Form.Group controlId="formPassword">
                <Form.Label><b>Password :</b></Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="e1"
                />
                <Form.Text className="text-danger">{formErrors.password}</Form.Text>
              </Form.Group>
              <br />
              <Button variant="success" type="submit" block>
                Sign Up
              </Button>
              <div className="mt-3 text-center">
                <p>Already have an account?</p>
                <Button variant="outline-primary" onClick={handleLoginRedirect}>
                  Go to Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
