import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Dashboard = ()=>{

    const [devotees, setDevotees] = useState([]);
    const navigate = useNavigate();

    useEffect( () =>{
        const fetchDevotees = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/devotees");
                const data = await response.json();

                setDevotees(data);

            } catch (error) {
                console.error("Error fetching devotees:",error.message);
            }
        }
        fetchDevotees();
    },[]);

    const handleDelete = async (devoteeId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/devotee/${devoteeId}`,{
                method: "DELETE",
            });

            if(response.ok){
                setDevotees((preDevotees) =>
                    preDevotees.filter((devotee)=> devotee.id !== devoteeId)
                )
            }

            console.log(`Devotee with ID ${devoteeId} deleted successfully`);
        } catch (error) {
            console.error("Error deleting devotee:", error.message);
        }
    }

    const handleUpdate = (devoteeId) =>{
        navigate(`/devotee/${devoteeId}`);
    }

    return(
        <>
        <Container className="mt-5">
            <Row>
                <Col>
                 <h1 className="text-center">Devotees</h1>
                 <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devotees.map((devotee) => (
                            <tr key={devotee.id}>
                                <td>{devotee.name}</td>
                                <td>{devotee.email}</td>
                                <td>{devotee.phone}</td>
                                <td>{devotee.department}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={() =>handleUpdate(devotee.id)}>Update</Button>{""}
                                        <Button variant="outline-danger" onClick={() => handleDelete(devotee.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                 </Table>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Dashboard;