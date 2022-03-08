import './style.css';
import react from "react";
import {Field} from 'react-final-form';

function SignInForm (props){

    return(       
        <form onSubmit={props.handleSubmit}>
            <h2>Formulario de ingreso</h2>
            <div>
                <h2>Datos Personales</h2>
                <div>
                    <label>First Name</label>
                    <Field name="firstName" component="input" placeholder="First Name" />
                </div>
                <div>
                    <label>Last Name</label>
                    <Field name="lastName" component="input" placeholder="Last Name" /> 
                </div>
                <div>
                    <label>Email</label>
                    <Field name="Email" component="input" placeholder="Email" />
                </div>        
            </div>
            <br/>
            <div>
                <h2>Datos de usuario</h2>
                <div>
                    <label>Username</label>
                    <Field name="UserName" component="input" placeholder="Username"/>
                </div>
                <div>
                    <label>Password</label>
                    <Field name="Password" component="input" placeholder="Password"/>
                </div>
                <div>
                    <label>ConfirmPassword</label>
                    <Field name="ConfirmPassword" component="input" placeholder="ConfirmPassword"/>
                </div>
            </div>
            <button type="submit">Submit</button>
            <button>cancel</button>
        </form>      
    );
}

export default SignInForm;