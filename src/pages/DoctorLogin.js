import Header from "../components/Header"
import Login from "../components/Login"
import Button from "../components/Button"
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
        <Header
                heading="Doctor's Portal"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/doctor/signup"
                />
                <Login/>
                <Link 
                to="/assistant/login">
                <Button
                placeholder={"Assistant? Login here"}
                />
                </Link>
        </>
    );
    }