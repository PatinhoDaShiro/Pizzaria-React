import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
export function Home(){
        return (
        <Container id="registropage">
        <Row>
        <Col  style={{ width: '18rem', margin:'1vh 0 0 0', textAlign:'center'}}>
         <img width="400px" src="./src/components/img/pizzaria.png"/>
         
        </Col>
        <Col xs={{ span: 12}} style={{  margin:'1vh 0 0 0', textAlign:'center'}}>
        <Button variant="warning" className=' text-dark' href='/registro' style={{ fontSize:'2rem', border:'solid 2px black'}}>Cadastrar-se</Button>
        </Col>
        <Col xs={{ span: 12}} style={{  margin:'1vh 0 0 0', textAlign:'center'}}>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={6}>
          <ListGroup>
          <ListGroup.Item action href="#link1">
            Quem somos?  
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
             Endereço da pizzaria: 
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
        <Col sm={6} style={{backgroundColor:'white', textAlign:'justify', borderRadius:'10px'}}>
          <Tab.Content >
            <Tab.Pane eventKey="#link2" style={{textAlign:'center',maxHeight:'fit-content', margin:'3vh 0 0 0'}} >
            <p >
            R. Jorge Augusto Dreher, 50 - Centro, Três Coroas - RS, 95660-000
            </p>         
            </Tab.Pane>
            <Tab.Pane eventKey="#link1" >
             <p style={{ padding:'7px 4px 4px 0'}}>A pizzaria do João vem produzindo as melhores pizzas desde 1997, sempre trazendo excelente qualidade, inesquecíveis sabores e um ótimo atendimento. Foi assim que conquistamos os nossos fiéis clientes e nos tornamos uma das pizzarias de referência em Três Coroas.
Conseguimos mesclar a tradição que adquirimos ao longo dos mais de 22 anos de experiencia com a modernidade do mundo, acompanhando e nos adaptando a evolução dele. Um exemplo disso é a nossa utilização de dois fornos, um à lenha e um forno ecológico, que é mais prático e menos poluente ao meio ambiente.
Com a intenção de sempre entregar o melhor aos nossos clientes, reformulamos a identidade visual de nossa empresa, assim deixando-a mais sofisticada e moderna.
E pensando na praticidade de entrega, possuímos a entrega delivery e estamos no IFOOD! Agora você pode pedir a sua deliciosa pizza do João em recebê-la em sua casa sem nenhum esforço.</p>
            </Tab.Pane>

            
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

        </Col>
        </Row>
        </Container>
            );
    }