

import './App.css'

import { Container, Card, Button } from 'react-bootstrap';

const App = () => {

return (
   <Container className=" min-vh-100 d-flex justify-content-center align-items-center">
     
       
         
            <Card className="shadow p-8 text-center">
              <Card.Body>
                <Card.Title as="h1" className="mb-3">
                  PinPoint App Support
                </Card.Title>
                <Card.Text className="mb-2">
                  Need help with the PinPoint app? We're here for you.
                </Card.Text>
                <Card.Text>Email us at:</Card.Text>
                <a
                  href="mailto:danielhackworth515@gmail.com"
                  className="d-block mb-3 text-primary fw-bold"
                >
                  danielhackworth515@gmail.com
                </a>
                <Card.Text className="text-muted small">
                  We typically respond within 1–2 business days.
                </Card.Text>
                <Button
                  variant="primary"
                  href="mailto:danielhackworth515@gmail.com"
                  className="mt-3"
                >
                  Contact Support
                </Button>
              </Card.Body>
            </Card>
         
 
    </Container>
  );
};


export default App;

