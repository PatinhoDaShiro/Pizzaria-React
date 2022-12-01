import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios"

export function Registro(){
  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };
  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

        return (
            <Container id="registropage" style={{textAlign:'center'}}>
          <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} id="registropage">
          <h1>Cadastro</h1>
      <Formik
        initialValues={{email: '', password: '' }}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div style={{margin:'5px'}} className="register-form-group">
            <Field name="email" style={{ width:'30vw', borderRadius:'10px', fontSize:'1.3rem'}}  className="form-field regiLabel " placeholder="Email" />
            <br />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div style={{margin:'5px'}} className="form-group">
            <Field name="password"style={{ width:'30vw', borderRadius:'10px', fontSize:'1.3rem'}} className="form-field regiLabel" placeholder="Senha" />
            <br />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div style={{margin:'5px'}} className="form-group">
            <Field style={{ width:'30vw', borderRadius:'10px', fontSize:'1.3rem'}}
              name="confirmation"
             className="form-field regiLabel"
              placeholder="Senha"
            />
<br />
            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>

          <Button className="button" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Formik>
    
            </Col>
          </Row>
          </Container>
    );
}