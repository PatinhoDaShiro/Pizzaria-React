import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { BsFillCartFill } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
function Navegacao() {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShows = () => setShows(true);
  const handleCloses = () => setShows(false);

  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };


  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="danger"  variant="dark">
      <Container>
        
        <Navbar.Brand href="/"><Image className="roundedCircle giro" width="70px" src="./src/components/img/logo.png" alt="" /><strong>  Pizzaria do João</strong></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >

          </Nav>
          <Nav>
          <Nav.Link href="/catalog" className="opcao" ><BsClipboard/> Fazer pedido </Nav.Link>
            <Nav.Link href="Cart" className="opcao"><BsFillCartFill/> Carrinho </Nav.Link>
           
            <Nav.Link className="opcao">
            <Button variant="primary" onClick={handleShow}>
       Iniciar sessão
      </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton >
      <Modal.Title>Iniciar sessão</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{textAlign:'center'}} >
    <div >
    <h1>Login</h1>
    </div>
      
      <Formik 
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group" style={{margin:'5px 5px 5px 5px'}}>
            <Field name="email" className="form-field" placeholder="Email" />
<br />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          {/*Outro campo*/}
          <div className="form-group" style={{margin:'5px 5px 5px 5px'}}>
            <Field name="password" className="form-field" placeholder="Senha" />
<br />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <Button variant="primary" onClick={handleClose} className="button" type="submit">
            Entrar
          </Button>
        </Form>
      </Formik>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="dark" href="/registro">
        Registrar
      </Button>
      <div className="me-auto">

      </div>
      <Button variant="secondary" onClick={handleClose}>
        Sair
      </Button>
    
        
    </Modal.Footer>
  </Modal>
  </>
  );


  
}

export default Navegacao;