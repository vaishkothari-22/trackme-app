import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteLog, fetchExerciseLog } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { NaviBar } from "./NaviBar";
import Footer from "./Footer";


export function LogLists(){
   
    const [exercise,setExercise]=useState([]);
    const [showDialog,setShowDialog]=useState(false);
    const [selectedUsername,setSelectedUsername]=useState("");
    const navigate = useNavigate();

    const openModalDialog=()=>{
        setShowDialog(true);
    }
    
    const closeModalDialog=()=>{
        setShowDialog(false);
    }
    
    async function storeExerciseLogsInState(){
        try{
            const data=await fetchExerciseLog();
            setExercise(data.Exer);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
         storeExerciseLogsInState();  
       
    },[]);

    
    const handleDelete=async()=>{
        try{
           await deleteLog(selectedUsername);
           storeExerciseLogsInState();
           closeModalDialog();
        }catch(error){
            console.log(error);
        }
}


    return(
        <>
         <NaviBar></NaviBar>
        <Container>
        <Alert className="mt-5 "variant="success">
            <h1><center>List of Exercise logs</center></h1>
        </Alert>
        {exercise.length!==0? 
       <Table className="mt-4 ">
        <thead>
        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
            exercise.map((s)=>{
                return(
                <tr>
                    <td>{s.username}</td>
                    <td>{s.description}</td>
                    <td>{s.duration}</td>
                    <td>{s.date}</td>
                    <td>
                        <Button variant="danger" onClick={()=>{
                           openModalDialog();
                           setSelectedUsername(s.username);
                        }} className="mr-3">Delete</Button> &nbsp;&nbsp;&nbsp;
                        <Button variant="primary"  onClick={()=>{
                            navigate(`/edit/${s.username}`)
                        }}className="mr-3">Edit</Button>
                    </td>
                </tr>
                );
            })
       }
      </tbody>
        </Table >:<p><b>No Logs Found!!!</b></p>}

        <Modal show={showDialog} onHide={closeModalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete Log of {selectedUsername}? </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={()=>{
            handleDelete();
          }}> 
            Yes
          </Button>
          <Button variant="danger" onClick={closeModalDialog}>
           No
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
        <Footer></Footer>
        </>

    );
  }