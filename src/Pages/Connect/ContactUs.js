import React from 'react';
import './ContactUsStyle.css';
import Contact from '../../Images/contact.png';
import icon from '../../Images/contactIcon.png'
import { useSelector } from 'react-redux';

const Connect = () => {

    const { Dark } = useSelector((state) => state.Theme);

    const SendMail = (e) => {
        e.preventDefault();
    }

    return (
        <div className={Dark ? "" : "light"}>
            <div className="contact" style={{ backgroundImage: `URL(${Contact})`, backgroundSize: "cover" }}>
                <div className="contact-header">
                    <h2>Let’s make something awesome together.</h2>
                    <p>Drop us a line, or give us a heads up if you’re interested in visiting us.</p>
                </div>

            </div>
            <div className="container">
                <h1 className='contact-line'>leave us a message and we will be in touch as soon as possible</h1>

                <div className="contact-form">
                    <form onSubmit={SendMail}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Adrress"
                            name="senderEmail"
                            required
                        />
                        <textarea
                            placeholder="We are pleased to know your suggestions."
                            name="message"
                            required

                        />
                        <input
                            type="submit"
                            value="Send"
                        />
                    </form>
                    <img src={icon} alt="readBook" />
                </div>

                <div className="contact-info">
                    <div className='address'>
                        <div>Address: <span>127, westwood lane DA15 9PS, Sidcup London, UK</span></div>
                        <div>Phone Number: <span>+099 588 201 001</span></div>

                        <div className='contact-card'>
                            <img src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt="" />
                            <div className="contact-card-info">
                                <span>Ahmed hany</span>
                                <span>Maketing manager</span>
                                <div>+111 0010 101 010</div>
                            </div>

                        </div>

                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.427803964737!2d29.907012514666153!3d31.208875069580465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38a0562fe85%3A0xa34cc632ec23e7!2sBibliotheca%20Alexandrina!5e0!3m2!1sen!2seg!4v1646795013226!5m2!1sen!2seg"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            title='library'
                        ></iframe>
                    </div>

                </div>

            </div>


        </div>
    );
}
export default Connect;
