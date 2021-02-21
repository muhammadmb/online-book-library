import React from "react"
import emailjs from "emailjs-com";
import icon from '../../Images/contactIcon.png'
import './MailStyle.css';

const Discuss = () =>{

const SendMail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_cs2zfqn', e.target, 'user_58V79t3CMe1pQccpi8Li9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
}

    return (
        <div className="MailContent">
            <div className="container">
                <form onSubmit = {SendMail}>
                    <input
                        type="text" 
                        placeholder = "First Name" 
                        name = "firstName" 
                    />
                    <input 
                        type="text"
                        placeholder = "Last Name"
                        name = "lastName" 
                    />
                    <input 
                        type="email" 
                        placeholder = "Email Adrress" 
                        name = "senderEmail" 
                    />
                    <textarea 
                        placeholder = "We are pleased to know your sugesstions." 
                        name = "message" 
                    />
                    <input
                        className = "button"
                        type="submit" 
                        value="Send"
                    />
                </form>
                <img src = {icon}/>
                <div className="Clear"></div>
            </div>
        </div>
    );

}
export default Discuss;