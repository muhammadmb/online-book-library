import React from 'react';
import './HomeBannerStyle.css';
import HomePic from "../../Images/HomePic.png";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const HomeBanner = () => {

  const { Dark } = useSelector((state) => state.Theme);

  return (
    <div
      className={Dark ? "welcome-card" : "welcome-card light"}
    >
      <div className="welcome-texts">
        <h2>Hi, welcome back!</h2>
        <h4>Here is a customised world of books for you.</h4>

        <Link to="/books">
          <button className="button">
            Browse Latest
          </button>
        </Link>
      </div>

      <img src={HomePic} alt="Homepicture" />
    </div>
  )
}

export default HomeBanner;