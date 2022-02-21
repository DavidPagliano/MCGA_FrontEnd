import './style.css';
import react from "react";
import {Field} from 'react-final-form';

function SignInForm (props){

    return(       
       <div className='container'>
            <form onSubmit={props.handleSubmit}>
                <h2>LogIn</h2>
                <div>
                    <div>
                        <label>Username</label>
                        <Field name="UserName" component="input" placeholder="Username"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name="Password" component="input" placeholder="Password"/>
                    </div>
                </div>
                <button className='btn' type="submit">Submit</button>
                <button className='btn' type='button'>Cancel</button>
            </form>      
       </div>
    );
}

export default SignInForm;