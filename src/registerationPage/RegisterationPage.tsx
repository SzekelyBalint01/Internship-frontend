import React, { useState } from 'react';
import "./RegisterationPage.css";

function RegistrationPage(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [registrationNumber, setRegistrationNumber] = useState<string>('');
  const [language, setLanguage] = useState<'english' | 'hungarian'>('hungarian');
  const pte_sidebar = require ('./pte_sidebar.png');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  const emailPlaceholder = language === 'english' ? 'Enter your email' : 'Adja meg az email címét';
  const passwordPlaceholder = language === 'english' ? 'Enter your password' : 'Adja meg a jelszavát';
  const companyNamePlaceholder = language === 'english' ? 'Enter your company name' : 'Adja meg a cégnévét';
  const registrationNumberPlaceholder = language === 'english' ? 'Enter your registration number' : 'Adja meg a cégbírósági azonosítóját';

  return (
    <div className='container'>
      <div className='sidebar'>
        <img src={pte_sidebar} alt='img' />
      </div>

      <div className='form-container'>
        <h1>{language === 'english' ? 'Register' : 'Regisztráció'}</h1>
        <form onSubmit={handleSubmit}>
          <label>
            {language === 'english' ? 'Email' : 'E-mail'}:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={emailPlaceholder} />
          </label>
          <br />
          <label>
            {language === 'english' ? 'Password' : 'Jelszó'}:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder={passwordPlaceholder} />
          </label>
          <br />
          <label>
            {language === 'english' ? 'Company Name' : 'Cégnév'}:
            <input type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} placeholder={companyNamePlaceholder} required  />
          </label>
          <br />
          <label>
            {language === 'english' ? 'Company Registration Number' : 'Cégre vonatkozó adószám'}:
            <input type="text" value={registrationNumber} onChange={(event) => setRegistrationNumber(event.target.value)} placeholder={registrationNumberPlaceholder} required  />
          </label>
          <br />
          <button className='register-btn' type="submit">{language === 'english' ? 'Register' : 'Regisztráció'}</button>
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>{language === 'english' ? 'Already a user?' : 'Van már felhasználód?'}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className='btn'><a href="/login">{language === 'english' ? 'Login' : 'Bejelentkezés'}</a></button>
          </div>

          <button onClick={() => setLanguage('english')}>English</button>
          <button onClick={() => setLanguage('hungarian')}>Hungarian</button>
          </div>
      </div>
    </div> 
  );
}

export default RegistrationPage;
