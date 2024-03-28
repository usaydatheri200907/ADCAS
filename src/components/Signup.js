import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate(); // Import useNavigate hook

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupState);
    try {
      const doctorResponse = await axios.post(
        "http://localhost:3001/doctor/signup",
        signupState
      );
      if (doctorResponse.status === 201) {
        console.log("Doctor account created successfully");
        navigate("/doctor/login"); // Redirect to login page after successful signup
        return;
      }
    } catch (doctorError) {
      console.error("Doctor account creation failed:", doctorError);
    }
    try {
      const assistantResponse = await axios.post(
        "http://localhost:3001/assistant/signup",
        signupState
      );
      if (assistantResponse.status === 201) {
        console.log("Assistant account created successfully");
        navigate("/assistant/login"); // Redirect to login page after successful signup
      } else {
        console.error("Assistant account creation failed");
      }
    } catch (assistantError) {
      console.error("Assistant account creation failed:", assistantError);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
