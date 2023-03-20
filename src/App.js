import logo from './logo.svg';
import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import ScreenSize from './components/ScreenSize';


function App() {
  return (
    <div className="App">
      <ScreenSize/>
      <>
      <div class="head">
            <h1 id="head1">www.globalcreatingroups</h1>
            <h1 id ="head2"> Crating offer....together</h1>
        </div>
      <Navbar id='Nav' bg="dark" variant="light">
        <Container id='nave'>
        <img
              src="https://www.shutterstock.com/image-vector/c-letter-logo-design-template-600w-2084961961.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          <Nav id='Nav-A' >
            <Nav.Link  href="#features">We Are here to give best solutio......</Nav.Link><br></br>
          </Nav>
         
        </Container>
      </Navbar>
      <br />
      
    </>
    {/* card group */}
   
    <CardGroup className='Mid'>
      <Card className='left'>
        <Card.Body>
          <Card.Title>About us....</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ab ad nemo quasi perspiciatis eum, minima inventore, in perferendis incidunt saepe quisquam, quas deserunt sequi recusandae? 
               Optio iusto fuga eaque consequuntur modi dolore sed aspernatur possimus.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='Right'>
        <Card.Body>
          <Card.Title>For Enquiry</Card.Title>
          <Card.Text id='Right Card'>
          <Form>  
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Name  " />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                   <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
           </Form>
          </Card.Text>
        </Card.Body>
       
      </Card>
      
    </CardGroup>
    
    <Navbar className="list"  bg="Dark">
        <Container>
          <Navbar.Brand href="#home"><ul>
              <li>1.Enquiry</li>
              <li>2.Email</li>
              <li>3.Lorem ipsem</li>
              <li>4.Enrollment</li>
              <li>5.Get personal desk</li>
              <li>6.Lorem ipsem</li>
              <li>7.contribute</li>
              
            </ul></Navbar.Brand>
        </Container>
      </Navbar>
      <Table id='Tab' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    
    </div>

  );
}

export default App;
