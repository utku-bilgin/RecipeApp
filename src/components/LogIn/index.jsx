import React from "react";
import { useState } from "react";
import './Login.css'

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Burada giriş işlemlerini gerçekleştirebilirsiniz.
    console.log("Kullanıcı Adı:", username);
    console.log("Şifre:", password);
    // Giriş işlemleri tamamlandıktan sonra kullanıcıyı ana sayfaya yönlendirebilirsiniz.
  };

  return (
    <div className="login">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin} className="loginForm">
        <input type="email" placeholder="Enter your email" className="formElement" />
        <input type="password" className="formElement" />
        <button
          type='submit'
          className='formElement'>
          Giriş
        </button>
      </form>
    </div>
  );
};

export default LogIn;
