import React from 'react';
import './SignInStyle.css';
import img from '../../Images/SignIn.png'

const SignIn = () => {

    let theme = localStorage.getItem("theme")

    return (
        <div className="signInContainer">
            <div
                className={theme === 'light' ? 'form light' : "form"}
            >
                <h1
                    className={theme === 'light' ? 'light' : ""}
                >
                    Book Reabers
                </h1>
                <form>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>User Name</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Password</span>
                    </div>

                    <input type="submit" value="send" />
                </form>
            </div>
            <div className="imgContainer">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default SignIn;