import React from 'react';
import './App.css';
import './assets/mail.png'
import './assets/call.png'
import './assets/cake.png'
export default function App() {
  return (
    <div className="container">
      <form className="contact-form">
        
        <div className="form-group">
          <label htmlFor="firstname">
          <img src={'./assets/'} alt="First Name" className="label-image" />
          </label>
          <input type="text" name="firstname" id="firstname" placeholder="First Name" />
        </div>

        <div className="form-group">
          <label htmlFor="lastname"></label>
          <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="contact"></label>
          <input type="tel" name="contact" id="contact" placeholder="Contact" />
        </div>

        <div className="form-group">
          <label htmlFor="dob"></label>
          <div className="dob-group">
            <input type="number" name="day" id="day" placeholder="Day" min="1" max="31" />
            <input type="number" name="month" id="month" placeholder="Month" min="1" max="12" />
            <input type="number" name="year" id="year" placeholder="Year" min="1900" max="2099" />
          </div>
        </div>

      </form>
    </div>
  );
}
