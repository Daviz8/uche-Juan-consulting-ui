/* eslint-disable react/no-unknown-property */
import './App.css';

function Contact() {
  return (
    <>
 <div className="p-4 sm:p-10 lg:p-28"> 
  <div className="form-container mx-auto">
    <p className="title Mont">Contact Us</p>
    <form className="form">
      <div className="input-group">
        <label htmlFor="username" className="text-xl Mont">Username</label>
        <input type="text" name="username" className="text-black" id="username" />
      </div>
      <div className="input-group py-3">
        <label htmlFor="password" className="text-xl Mont">Password</label>
        <input type="password" name="password" className="text-black py-3" id="password" />
      </div>
      <button className="sign hover:bg-blue-600 bg-black-800 text-white Mont">Contact</button>
    </form>
  </div>
</div>

    </>
  );
}

export default Contact;  {/* Fixed: Removed trailing comma */}