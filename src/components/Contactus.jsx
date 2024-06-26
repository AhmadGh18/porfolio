import React from "react";
import { MdEmail } from "react-icons/md";

const Contactus = () => {
  return (
    <div className="contactus">
      <div className="contactContainer">
        <div className="contactleft">
          <h1>
            Let's chat. <br />
            Tell me about <span>your</span> <br /> project
          </h1>
          <h6>Lets chats something together</h6>
          <p>
            Mail me at ahmad.ghzayel.me@gmail.com <MdEmail />{" "}
          </p>
        </div>
        <div className="contactright">
          <h1>send us message 🚀</h1>
          <input placeholder="full name" />
          <input placeholder="email" />
          <input placeholder="subject" />
          <p>Tell me how can i help you</p>
          <textarea
            rows={7}
            cols={30}
            placeholder="explain your issue"
          ></textarea>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
