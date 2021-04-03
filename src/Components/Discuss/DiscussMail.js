import React from "react"
import icon from '../../Images/contactIcon.png'
import './MailStyle.css';

const Discuss = () => {

    const theme = localStorage.getItem("theme");

    const SendMail = (e) => {
        e.preventDefault();
    }

    return (
        <div className={theme === 'light' ? "MailContent light" : "MailContent"}>
            <div className="container">
                <form onSubmit={SendMail}>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Adrress"
                        name="senderEmail"
                        required
                    />
                    <textarea
                        placeholder="We are pleased to know your sugesstions."
                        name="message"
                        required
                    />
                    <input
                        className="button"
                        type="submit"
                        value="Send"
                    />
                </form>
                <img src={icon} alt="readBook" />
                <div className="Clear"></div>
            </div>
        </div>
    );

}
export default Discuss;