import './style.css';
import React from 'react';
import { Form } from 'react-final-form';
import SignInForm from './SignForm';
class SignIn extends React.Component {
 
 onSubmit(){
  console.log("Enviado");
 }
 validate(values){
  if (values.username) {
   alert('User Name Required');
  }
  if (values.password) {
    alert('Pass Required');
  }
  if (values.ConfirmPassword) {
    alert('Confirm Pass Required');
  }

   if(values && values.firstName &&values.firstName.length < 3){
     console.log('Debe ser mayor a 3 caracteres', values.firstName);
   }
  console.log('validating form', values);
 }

 render(){
    return (
      <div className='contanier-signin'>
        <h1>SignIn</h1>
        <Form
          onSubmit={this.onSubmit}
          validate={this.validate}
          render={SignInForm}
        />
      </div>
    );
 }
}

export default SignIn;