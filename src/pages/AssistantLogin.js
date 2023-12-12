import Header from "../components/Header"
import Login from "../components/Login"
import Button from "../components/Button"
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
        <Header
                heading="Assistant's Portal"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
                <Login/>
                <Link 
                to="../assistantLogin">
                <Button
                placeholder={"Doctor? Login here"}
                />
                </Link>
        </>
    );
    }