import {  useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchExerciseLogByUserName, updateExerciseLog } from "../services/UserService";
import { NaviBar } from "./NaviBar";
import Footer from "./Footer";


export function ExerciseLogEdit(){
    
    const params = useParams();
    const[formData,setFormData]=useState({username:"",description:"",duration:"",date:""});
    const [isSubmitted,setIsSubmitted]=useState(false);
    

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const result = await updateExerciseLog(formData,params.username); 
        setIsSubmitted(true);
           setTimeout(()=>{
            setIsSubmitted(false)
           },1500);
        console.log(result);
    }catch(error){
     console.log(error)
    }
}

const populateExerciseLogState=async()=>{
    try{
      const result = await fetchExerciseLogByUserName(params.username);
      setFormData(result.Exer);
    }catch(error){
        console.log(error)
       }
    }

    useEffect(()=>{
    populateExerciseLogState();
    },[]);

    return(
        <>
        <NaviBar></NaviBar>
        <Container className="be">
            {formData?
            <Form  onSubmit={handleSubmit}>
                <h2 className="mb-3 mt-5">Update Your Exercise Log !!!</h2>
                <Form.Group controlId="formUserName" className="lg-12">
                    <Form.Label><b>User Name : </b></Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={formData.username}  name="username" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formDescription" className="mt-4">
                    <Form.Label><b>Description : </b></Form.Label>
                    <Form.Control type="text" placeholder="Enter description"  value={formData.description} name="description" onChange={handleChange} />
                </Form.Group>

                
                <Form.Group controlId="formDuration" className="mt-4">
                    <Form.Label><b>Duration (in minutes) : </b></Form.Label>
                    <Form.Control type="text" placeholder="Enter duration"  value={formData.duration} name="duration" onChange={handleChange} />
                </Form.Group><br></br>

                    <label htmlFor="date"><b>Date : </b></label>
                    <input
                            type="date"
                            id="dateInput"
                            value={formData.date}
                            name="date"
                            onChange={handleChange}
                         
                            />
                        <br></br>
                <Button variant="primary" type="submit" className="mt-4" >
                    Update
                </Button>
            </Form>:<p>No data found for the given Name!!!</p>}
            <Row className="mt-4">
            <Col lg={4}>
            {isSubmitted?<Alert variant="success">Your Log is Updated !!!</Alert>:null}
            </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </>
    );
}