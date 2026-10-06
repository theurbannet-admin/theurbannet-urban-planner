import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authPhoto from "../assets/sign_up_image.png";
import "./signup.css"; // <-- Standard import

function SignUp() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("customer");

    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        try {
            const payload = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phoneNumber,
                password: password,
                user_type: userType,
            };

            const response = await fetch("http://127.0.0.1:5000/api/auth/signup", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.status == 201) {
                console.log('Registration successful!');
                navigate('/login');
            } else {
                setErrorMessage(data.error || data.message || "Registration failed.");
            }

        } catch (error) {
            console.error("Error during signup:", error)
            setErrorMessage("An error occurred while signing up. Please try again.");
        }
    };

    return (
        <main className="auth-page">
            <section className="auth-card">
                <div className="auth-content">
                    <p className="eyebrow">Join the Community</p>
                    <h1>
                        Create your <span>Urban Planner</span> account today!
                    </h1>
                    <p className="intro-text">Start planning with Real People Real Services</p>

                    {   errorMessage && <p style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</p> }
                    
                    <form onSubmit={handleSignup} className="auth-form">
                        <div className="role-selector" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                            <div className="radio-option">
                                <input 
                                    type="radio" 
                                    id="role-customer"
                                    name="userRole" 
                                    value="customer" 
                                    checked={userType === "customer"} 
                                    onChange={(e) => setUserType(e.target.value)}
                                    className="custom-radio"
                                />
                                <label htmlFor="role-customer" style={{ cursor: 'pointer', marginLeft: '8px' }}>
                                    Customer <br/><span style={{ fontSize: '12px', color: 'gray' }}>(I am planning an event)</span>
                                </label>
                            </div>

                            <div className="radio-option">
                                <input 
                                    type="radio" 
                                    id="role-provider"
                                    name="userRole" 
                                    value="provider" 
                                    checked={userType === "provider"} 
                                    onChange={(e) => setUserType(e.target.value)}
                                    className="custom-radio"    
                                />
                                <label htmlFor="role-provider" style={{ cursor: 'pointer', marginLeft: '8px' }}>
                                    Service Provider <br/><span style={{ fontSize: '12px', color: 'gray' }}>(I am offering a service)</span>
                                </label>
                            </div>
                        </div>

                        <div className="name-row">
                            <label className="name-label">
                                First Name
                                <input type="text" placeholder="Enter your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            </label>
                            <label className="name-label">
                                Last Name
                                <input type="text" name="last_name" placeholder="Enter your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                            </label>
                        </div>

                        <label>
                            Email 
                            <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        
                        <label>
                            Phone Number
                            <input type="tel" placeholder="+250123456789" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </label>

                        <label>
                            Password 
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required />
                        </label>

                        <button type="submit">Sign Up</button>
                        <p style={{ marginTop: '15px', fontSize: '14px' }}>Already have an account? <Link to="/login" style={{color: 'var(--orange)'}}>Log In here</Link></p>
                    </form>
                </div>

                <div className="auth-image">
                    <img src={authPhoto} alt="urbannet registration visual" />
                </div>
            </section>
        </main>
    )
}

export default SignUp;