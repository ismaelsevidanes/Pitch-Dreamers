import React from "react";
import "./login.css"; // Aquí importarás tus estilos CSS

const Login = () => {
  return (
    <div className="login-page">
      <header className="header">
        <img className="logo" src="https://via.placeholder.com/378x105" alt="Candy Soap Logo" />
      </header>
      <main className="login-container">
        <div className="login-card">
          <div className="login-avatar">
            <img src="https://via.placeholder.com/223x222" alt="User Avatar" />
          </div>
          <div className="social-buttons">
            <button className="btn facebook-btn">Facebook</button>
            <button className="btn google-btn">Google</button>
            <button className="btn grid-btn">Otro</button>
          </div>
          <p className="or-divider">O</p>
          <form className="login-form">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" className="input-field" placeholder="Ingresa tu correo" />
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" className="input-field" placeholder="Ingresa tu contraseña" />
            <button type="submit" className="btn login-btn">Iniciar Sesión</button>
          </form>
          <div className="additional-links">
            <a href="#" className="link">¿No tienes cuenta?</a>
            <a href="#" className="link">¿Has olvidado la contraseña?</a>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© 2023 Candy Soap - All rights reserved</p>
        <div className="footer-links">
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Contacto</a>
          <a href="#">FAQ</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;