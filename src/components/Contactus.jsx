import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const templateForm = {
    from_name: name,
    from_subject: subject,
    from_email: email,
    to_name: "Ahmad",
    message: message,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3y77lcu",
        "template_di25com",
        templateForm,
        "amDIkmdHOCdQukrOT"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contactus">
      <form ref={form} onSubmit={sendEmail}>
        <div className="contactContainer">
          <div className="contactleft">
            <h1>
              Let's chat. <br />
              Tell me about <span>your</span> <br /> project
            </h1>
            <h6>Let's chat something together</h6>
            <p>
              Mail me at ahmad.ghzayel.me@gmail.com <MdEmail />{" "}
            </p>
          </div>
          <div className="contactright">
            <h1>Send us a message 🚀</h1>

            <input
              placeholder="Full name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <p>Tell me how I can help you</p>
            <textarea
              rows={7}
              value={message}
              cols={30}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Explain your issue"
              name="message"
            ></textarea>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
