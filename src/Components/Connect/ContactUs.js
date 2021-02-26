import React from 'react';
import './ContactUsStyle.css';
import Discuss from '../Discuss/DiscussMail';
import Contact from '../../Images/contact.png';

const Connect = () => {

    return (
        <div style={{ backgroundImage: `URL(${Contact})`, backgroundSize: "cover" }}>
            <div className="wraper">
                <div className="contactDiv container">
                        <h2>Let’s make something awesome together.</h2>
                        <p>Drop us a line, or give us a heads up if you’re interested in visiting us.</p>
                </div>
            </div>

            {/* <div className="Clear"></div> */}
            <Discuss />
        </div>
    );
}
export default Connect;
