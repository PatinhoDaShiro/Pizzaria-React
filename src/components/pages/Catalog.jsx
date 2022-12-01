import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import * as yup from "yup";
import { ErrorMessage, Formik, Field } from "formik";
import Axios from "axios"


export function Catalog(){

  
  
  const list = [
    {
      label: "Tipo de massa",
      value: "" ,
      
    },
    {
      label: "Massa comum",
      value: "comum",
    },
    {
      label: "Massa integral",
      value: "integral",
    },
    {
      label: "Massa temperada",
      value: "temperada",
    },
  ];
 

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/catalog", {
      massa: values.massa,
      borda: values.borda,
      sabor1: values.sabor1,
      sabor2: values.sabor2,
      sabor3: values.sabor3,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };
  (function(){
    "use strict";
  
    var marcados = 0;
    var verifyCheckeds = function($checks ){
      if( marcados>=3 ) {
        loop($checks, ($element) => {
            $element.disabled = $element.checked ? '' : 'disabled';
          });
      } else {
        loop($checks, function($element) {
          $element.disabled = '';
        });
      }
    };
    var loop = function($elements) {
      var max = $elements.length;
      while(max--) {
        cb($elements[max]);
      }
    }
    var count = function($element) {
      return $element.checked ? marcados + 1 : marcados - 1;
    }
    window.onload = function(){
      var $checks = document.querySelectorAll('input[type="checkbox"]');
      loop($checks, function($element) {
        $element.onclick = function(){
          marcados = count(this);
          verifyCheckeds($checks);
        }
        if($element.checked) marcados = marcados + 1;
      });
      verifyCheckeds($checks);
    }
  }());


const [select,setSelect]= useState(''); 
const onChangeSelect = (event) =>{
  setSelect(event.target.value)
}
    return (
        <Container className="section">
          <Row>
          <Form>
           
            
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} className="section">
            <h1>Faça seu pedido.</h1>
            <Form.Select size="lg" name="massa" id="massa" value={select} onChange={onChangeSelect} >
            
            {list.map((option) => (
              <option value={option.value} >{option.label}</option>
              ))}
        
{/* 
            <option value="" disabled selected>Tipo de massa</option>
            <option value="comum">Massa comum</option>
            <option value="integral">Massa integral</option>
            <option value="temperada">Massa temperada</option> */}
            </Form.Select>
            </Col>
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} className="section">
            <Form.Select size="lg" name="borda" id="borda" >
            <option value="" disabled selected>Tipo de borda</option>
            <option value="cheddar">Cheddar</option>
            <option value="catupiry">Catupiry</option>
            <option value="chocolate">Chocolate</option>
            </Form.Select>
            </Col>
            
    
            <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} className="section">
            <h2 >Escolha até <span id="tres">três</span> sabores</h2>
            <br />
          <Form.Check inline label="4 Queijos" name="sabores" id="4 Queijos" />
          <Form.Check inline label="Frango com Catupiry" name="sabores" id="Frango com Catupiry" />
          <Form.Check inline label="Calabresa" name="sabores" id="Calabresa" />
          <Form.Check inline label="Lombinho" name="sabores" id="Lombinho" />
          <Form.Check inline label="Filé com Cheddar" name="sabores" id="Filé com Cheddar" />
          <Form.Check inline label="Portuguesa" name="sabores" id="Portuguesa" />
          <Form.Check inline label="Margherita" name="sabores" id="Margherita" />

          
          </Col>
          <Col xs={{ span: 12, }} md={{ span: 12}} className="section">
          <Button variant="success">Enviar pedido!</Button>{' '}
          </Col>
    </Form>
          </Row>
          </Container>
    );
}