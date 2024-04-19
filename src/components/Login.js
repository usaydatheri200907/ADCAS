import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from 'axios';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        authenticateUser();
    }

    // Handle Login API Integration here
    const authenticateUser = async () => {
        // try {
        //     const doctorResponse = await axios.post('http://localhost:3001/doctor/login', {
        //         email: loginState.email,
        //         password: loginState.password
        //     });
        //     if (doctorResponse.status === 200) {
        //         navigate('/home');
        //         return;
        //     }
        // } catch (doctorError) {
        //     console.error('Doctor login failed:', doctorError);
        // }

        // try {
        //     const assistantResponse = await axios.post('http://localhost:3001/assistant/login', {
        //         email: loginState.email,
        //         password: loginState.password
        //     });
        //     if (assistantResponse.status === 200) {
        //         navigate('/home');
        //     } else {
        //         console.error('Assistant login failed');
        //     }
        // } catch (assistantError) {
        //     console.error('Assistant login failed:', assistantError);
        // }
        navigate('/home');
    }

    return (
        <form className="mt-8 space-y-6 px-96" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />

        </form>
    )
}
