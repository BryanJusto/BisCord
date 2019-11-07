import React, {useState} from 'react';
//import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

export default function Login(props){
  const [isLoading,setIsLoading] = useState(false);
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm(){
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      //await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
    }
  }

  return(
    <div className="Login">
      <form onSubmit={handleSubmit}>

        <Form.Group controlId="email" bsSize="large">
          <Form.Label>Email</Form.Label>
          <Form.Control autoFocus type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </Form.Group>

        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
)
}
