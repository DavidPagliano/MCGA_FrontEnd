import './style.css';
import react from "react";
import {Field} from 'react-final-form';

function ContactForm (props){
    return(       
        <form onSubmit={props.handleSubmit}>
            <h2>Formulario de contacto</h2>
            <div>
                <div>
                    <label>First Name </label>
                    <Field name="firstName" component="input" placeholder="First Name" />
                </div>
                <div>
                    <label>Last Name </label>
                    <Field name="lastName" component="input" placeholder="Last Name" /> 
                </div>
                <div>
                    <label>Email </label>
                    <Field name="Email" component="input" placeholder="Email" />
                </div>
                <div>
                    <label>Phone </label>
                    <Field name="Phone" type='text' component="input" placeholder="Phone" />
                </div>  
                <div>
                    <label>Messages </label>
                    <Field name='Messages' component="textarea" placeholder="Messages"/>
                </div>      
            </div>
            <button className='btn-submit' type="submit">Submit</button>
            <button className='btn-cancel' type='button' >Cancel</button>
        </form>      
    );
}

export default ContactForm;