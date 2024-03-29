import Header from "../components/Header"
import AssistantLogin from "../components/AssistantLogin"
import Button from "../components/Button"
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
        <Header
                heading="Assistant's Portal"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/assistant/signup"
                />
                <AssistantLogin/>
                <Link 
                to="/doctor/login">
                <Button
                placeholder={"Doctor? Login here"}
                />
                </Link>
        </>
    );
    }