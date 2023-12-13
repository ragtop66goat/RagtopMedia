import {useState} from "react";
import emailjs from '@emailjs/browser'
import './EmailForm.css'

export default function EmailForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    const serviceId = "service_29k71ep";
    const templateId = "template_j4gq9gf";
    const publicKey = "mVGBDkYcbf4b1jUbw";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ragtop Media",
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response)
        setName("")
        setEmail("")
        setMessage("")
      })
      .catch((error) => {
        console.error('Error sending email', error);
      })
  }

  return (
    <form onSubmit={handleSubmit} className="email-form container w-25">
      <input
      type="text"
      placeholder="Your name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />
      <button type="submit">Send Email</button>
    </form>
  )
}