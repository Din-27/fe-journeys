zimport React, { useContext, useState } from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import Desain1 from '../../assets/leaf 1.png'
import Desain2 from '../../assets/atlas 1.png'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'
import { API } from '../../config/api';
import Swal from 'sweetalert2';




function ModalLogin(props) {

  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(form);

      const response = await API.post("/login", body, config);
      console.log(response);

      if (response?.status == 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data.user,
        });

        if (state.isLogin == true) {
          navigate("/home");
        } 
        // Swal("Login Success!", "You clicked the button!", "success"); 
      }
  }catch(error){
    // Swal("Email & Password Not Match!", "You clicked the button!", "error");
  }
}

    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Row>
            <Col sm={4}>
                <img src={Desain2} alt="" 
                style={{height: "150px", width: "60px"}}/>
            </Col>
            <Col sm={{ span: 4, offset: 3}}>
                <img src={Desain1} alt="" 
                style={{height: "150px", width: "111px"}}/>
            </Col>
        </Row>
        <Modal.Body>
          <h4 className='text-center'>Login</h4>
          <Form method='post' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight: "bold"}}>Email address</Form.Label>
                <Form.Control 
                type="email" 
                name='email'
                onChange={handleChange}
                placeholder="Enter Email" 
                style={{backgroundColor: 'rgba(210, 210, 210, 0.25)', 
                border: 'none'}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{fontWeight: "bold"}}>Password</Form.Label>
                <Form.Control 
                type="password" 
                name='password'
                onChange={handleChange}
                placeholder="Enter Password" 
                style={{backgroundColor: 'rgba(210, 210, 210, 0.25)', 
                border: 'none'}}/>
            </Form.Group>
            <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit"
                style={{fontWeight: "bold"}}>
                    Submit
                </Button>
            </div>
        </Form>
        </Modal.Body>
      </Modal>
    );
  }
  

export default ModalLogin