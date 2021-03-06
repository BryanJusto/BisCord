import React from 'react';

import{
  Form,
  Button
} from 'react-bootstrap';

export default function Signup(props) {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const[newUser, setNewUser] = useState(null);
  const[isLoading, setIsLoading] = useState(false);

  function validateForm(){
    return(
      fields.email.length > 0 && fields.password.length > 0 && fields.password === fields.confirmPassword
    );
  }

  async function handleSubmit(event){
    event.preventDefault();
    setIsLoading(true);
    setNewUser("test");
    setIsLoading(false);
  }

  async function handleConfirmationSubmit(event){
    event.preventDefault();
    setIsLoading(true);
  }

  function renderForm(){
    return(
      <form onSubmit = {handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl autoFocus type="email" value={fields.email} onChange={handleFieldChange}/>
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl type ="password" value={fields.password} onChange={handleFieldChange}/>
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl type ="password" value={fields.confirmPassword} onChange={handleFieldChange}/>
        </FormGroup>
        <LoaderButton block type="submit" bsSize="large" isLoading={isLoading} disabled={!validateForm()}>
          Signup
        </LoaderButton>
      </form>
    );
  }
  return(
    <div className="Signup">
      {newUser === null (renderForm())}
    </div>
  );
}
