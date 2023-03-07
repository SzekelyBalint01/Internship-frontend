import React, { useState } from 'react';
import axios from "axios";
import { hash } from "bcryptjs";
import "./LoginPage.css";

function LoginPage(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [language, setLanguage] = useState<'english' | 'hungarian'>('hungarian');
  const pte_sidebar = require ('./pte_sidebar.png');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hashedPassword = await hash(password, 10);

    const requestData = {
      email: email,
      password: hashedPassword,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/public/companyLogin",
        JSON.stringify(requestData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration successful: ", response);
    } catch (error) {
      console.error("Registration failed: ", error);
    }
  };

  const emailPlaceholder = language === 'english' ? 'Enter your email' : 'Adja meg az email címét';
  const passwordPlaceholder = language === 'english' ? 'Enter your password' : 'Adja meg a jelszavát';
  return (
    <div className='container'>
      <div className='sidebar'>
        <img src={pte_sidebar} alt='img' />
      </div>

      <div className='form-container'>
        <h1 style={{ textAlign: 'left'}}>{language === 'english' ? 'Login' : 'Bejelentkezés'}</h1>
        <br />
        <form onSubmit={handleSubmit} method="post">
          <label>
            {language === 'english' ? 'Email' : 'E-mail'}:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={emailPlaceholder} />
          </label>
          <br />
          <label>
            {language === 'english' ? 'Password' : 'Jelszó'}:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder={passwordPlaceholder} />
          </label>
          <div className='checkbox-container'>
            <input style={{marginRight:10 }} type="checkbox" id="rememberme" name="remember me" />
          Emlékezz rám
          </div>
          <br />
          <br />
          <br />
          <br />
          <div >
            <button className='btn' type='submit'><a href="/login">{language === 'english' ? 'Login' : 'Bejelentkezés'}</a></button>
          </div>
              </form>
          <br />
          
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>{language === 'english' ? 'YOu dont have account?' : 'Nincs felhasználód?'}</p> 
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className='btn'>{language === 'english' ? 'Register' : 'Regisztráció'}</button>
          </div>
          
          {/* 
          <button onClick={() => setLanguage('english')}>English</button>
          <button onClick={() => setLanguage('hungarian')}>Hungarian</button>
          */}
          </div>
      </div>
    </div> 
  );
}

export default LoginPage;
