import React from 'react';
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";


const Loginpage: React.FC = () => {
  return (
    <>
      <Header />

    <div className="font">
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
      </div>
      </div>
      <Footer />
      </>
  );
}

export default Loginpage;
