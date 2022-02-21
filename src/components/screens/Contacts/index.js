import './style.css';
import React from 'react';
import { Form } from 'react-final-form';
import ContactForm from './ContactForm';
class Contacts extends React.Component {
    onSubmit(){
        console.log("Enviado");
    };
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
            <div className="Contact">
             <h1>Contact</h1>
                <ul>
                    <li>Plan1</li>
                    <li>Plan2</li>
                    <li>Plan3</li>
                </ul>
                <div className='form-contact'>
                    <Form
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        render={ContactForm}
                    />
                </div>
            </div>
          );
      }
 
}

export default Contacts;