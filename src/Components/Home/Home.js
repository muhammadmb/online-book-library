import React, { useState, useEffect } from 'react';
import HomePic from "../../Images/HomePic.png";
import Button from 'react-bootstrap/Button';
import './HomeStyle.css';
import MiniBookCard from '../Card/HomeCard';

const Home = () => {

  return (
    <div className="container">
      <div>
        <div className="welcomeCard">
          <div className="welcomeTexts">
            <h2>Hi, welcome back!</h2>
            <h4 >Here is a customised world of books for you.</h4>
            <Button variant="outline-info" style={{ margin: 25 }}>Browse Latest</Button>
          </div>
          <img src={HomePic} alt="Home picture" />
        </div>

        <span className="sideTitles" >Recommended For You</span>

        <div className="swipperDiv">
          <div className="Card"><MiniBookCard name={"A Million to one"} cover={"https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"} /></div>
          <div className="Card"><MiniBookCard name={"Amara the brave"} cover={"https://marketplace.canva.com/EAD7WWWtKSQ/1/0/251w/canva-purple-and-red-leaves-illustration-children%27s-book-cover-hNI7HYnNVQQ.jpg"} /></div>
          <div className="Card"><MiniBookCard name={"The king of drugs"} cover={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"} /></div>
          <div className="Card"><MiniBookCard name={"The Martian"} cover={"https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale"} /></div>
          <div className="Card"><MiniBookCard name={"Tress of the road"} cover={"https://images.squarespace-cdn.com/content/v1/5ae2fce87e3c3ae275ea2c9f/1526464175408-W92Q4MSAM40I8YF4HM64/ke17ZwdGBToddI8pDm48kG42nK5MxReh9N1Tgs_dc9t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXysNIcM8ERoy824r28kfN5DdNsbvYnFI46u1WARIoKesh_vZu_IHrh0xbom9DKbTA/tess-cover.jpg?format=1500w"} /></div>
        </div>

        <span className="sideTitles">Catagories</span>

        <div className="swipperDiv">
          <div className="Card"><MiniBookCard name={"Historical books"} cover={"http://theteachersdigest.com/wp-content/uploads/2014/07/History.png"} /></div>
          <div className="Card"><MiniBookCard name={"Geography"} cover={"https://examsbook.co.in/img/post/original/P6FhLCyoPhysical-Geography-Questions.jpg"} /></div>
          <div className="Card"><MiniBookCard name={"Fantasy novels"} cover={"https://cdn.vox-cdn.com/thumbor/pm5942TRPaT42r8f6KllDbjruRA=/0x0:3000x1688/1200x675/filters:focal(1260x604:1740x1084)/cdn.vox-cdn.com/uploads/chorus_image/image/67447853/Emere.0.jpg"} /></div>
          <div className="Card"><MiniBookCard name={"Computer Science"} cover={"https://onlinedegreeportal.com/wp-content/uploads/2020/11/Best-Online-Computer-Science-Bachelor-Degree.jpg"} /></div>
          <div className="Card"><MiniBookCard name={"Mechanics engineering"} cover={"https://ugc.futurelearn.com/uploads/images/3d/d2/header_3dd2e58f-ea83-452d-a280-2ead2ec2bae0.jpg"} /></div>
        </div>

      </div>
    </div>
  );
}
export default Home;