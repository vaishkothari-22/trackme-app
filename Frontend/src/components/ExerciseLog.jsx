import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveExerciseLog } from "../services/UserService";
import { NaviBar } from "./NaviBar";
import Footer from "./Footer";

export function ExerciseLog() {
  const [formData, setFormData] = useState({
    username: "",
    description: "",
    duration: "",
    date: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear field error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required.";
    if (!formData.description.trim()) newErrors.description = "Description is required.";
    if (!formData.duration.trim()) newErrors.duration = "Duration is required.";
    else if (isNaN(formData.duration)) newErrors.duration = "Duration must be a number.";
    if (!formData.date) newErrors.date = "Date is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const result = await saveExerciseLog(formData);
      setFormData({ username: "", description: "", duration: "", date: "" });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 1500);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NaviBar />
      <Container className="bi">
        <Form onSubmit={handleSubmit}>
          <h2 className="mb-3 mt-5">Create New Exercise Log !!!</h2>

          <Form.Group controlId="formUserName">
            <Form.Label><b>User Name:</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <Form.Text className="text-danger">{errors.username}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formDescription" className="mt-4">
            <Form.Label><b>Description:</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <Form.Text className="text-danger">{errors.description}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formDuration" className="mt-4">
            <Form.Label><b>Duration (in minutes):</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />
            <Form.Text className="text-danger">{errors.duration}</Form.Text>
          </Form.Group>

          <Form.Group className="mt-4">
            <Form.Label htmlFor="date"><b>Date:</b></Form.Label>
            <Form.Control
              type="date"
              id="dateInput"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <Form.Text className="text-danger">{errors.date}</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4">
            Create Exercise Log
          </Button>
        </Form>

        <Row className="mt-4">
          <Col lg={4}>
            {isSubmitted && <Alert variant="success">Your Log is Registered !!!</Alert>}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
