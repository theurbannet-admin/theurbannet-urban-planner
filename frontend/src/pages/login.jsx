import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import authPhoto from "../assets/login_image.png";
import "./login.css";

function Login() {
    // defining the constants for the form inputs and the error message
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault(); // This stops the page from refreshing when the form has been submitted
        setErrorMessage(""); 

        try {
            const response = await fetch("http://127.0.0.1:5000/api/auth/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Store the token in localStorage (or a cookie)
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user)); 

                console.log("Login successful:", data.user);
                navigate("/dashboard"); // Redirect to the dashboard after successful login
            } else {
                setErrorMessage(data.message);
            }

        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    return (
        <main className="auth-page">
            <section className="auth-card">
                <div className="auth-content">
                    <p className="eyebrow">Welcome Back</p>
                    <h1>Access your <span>Workspace</span></h1>
                    <p className="intro-text">Log in to manage your events and services</p>

                    {errorMessage && <p style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</p>}

                    <form action="" className="auth-form" onSubmit={handlelogin}>
                        <label>
                            Email
                            <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Password
                            <input type="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>

                        <button type="submit">Log In</button>
                        <p>Don't have an account? <Link to="/signup" style={{color: 'var(--orange)'}}>Sign up here</Link></p>
                    </form>
                </div>

                <div className="auth-image">
                    <img src={authPhoto} alt="Urbannet Login Visual" />
                </div>
            </section>
        </main>
    );
}

export default Login
// for styling the p after the submit button : style={{ marginTop: '15px', fontSize: '14px' }}