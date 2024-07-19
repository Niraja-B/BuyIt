import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './loginpage.css';
export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate=useNavigate()
  // localStorage.setItem("email",email)
 function local(){
  
  localStorage.setItem("email",email)
  localStorage.setItem("password",password)
 }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || email === '' || phone === '' || city === '' || country === '' || password === '') {
      setError('Please fill in all fields');
    } else {
      local();
      console.log(`Login successful! Username: ${username}, Email: ${email}, Phone: ${phone}, City: ${city}, Country: ${country}, Password: ${password}`);
      // Send login request to server-side API
      // Reset form fields
      setUsername('');
      setEmail('');
      setPhone('');
      setCity('');
      setCountry('');
      setPassword('');
      setError(null);
      navigate("/sign")
    }
  };

  return (
    <div>
    <div className="container">
      <div className="login-box">
        <h1>BuyIt</h1>
		<div class="login-box1">
  
        <form onSubmit={handleSubmit}>
          <label for="username">Username:</label>
          <input className="log" type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
          <br /><br />
          <label for="email">Email:</label>
          <input className="log" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <br /><br />
          <label for="phone">Phone:</label>
          <input  className="log" type="tel" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
          <br /><br />
          <label for="city">City:</label>
          <input className="log" type="text" id="city" value={city} onChange={(event) => setCity(event.target.value)} />
          <br /><br />
          <label for="country">Country:</label>
          <input className="log" type="text" id="country" value={country} onChange={(event) => setCountry(event.target.value)} />
          <br /><br />
          <label for="password">Password:</label>
          <input className="log" type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <br /><br />
          {error && <div style={{ color: 'red' }}>{error}</div>}
        <input className="logbutton" type="submit" onClick={handleSubmit}  value="Sign Up" />
           <div>             <img className="logo" src="data:image/jpeg;base64,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" ></img>
 </div>
        </form>
      </div>
    </div></div></div>

  );

 };