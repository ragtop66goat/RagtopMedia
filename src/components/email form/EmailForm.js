import {useState} from "react";
import emailjs from '@emailjs/browser';
import './EmailForm.css';

export default function EmailForm() {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const {name, email, message} = formData;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ragtop Media",
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setFormData({name: '', email: '', message: ''});
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  };

  return (
    <div className="container w-50 mt-10 d-flex">
      <div>
        <h3>Reach out via email</h3>
        <h4>Or on any of the platforms<br/> linked below</h4>
      </div>
      <form onSubmit={handleSubmit} className="email-form flex-grow-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Johnny Newcomer"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="example@new2u.net"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Type your message here"
          name="message"
          value={message}
          onChange={handleChange}
        />
        <button className="email-form-btn" type="submit">Send Email</button>
      </form>
    </div>
  );
}