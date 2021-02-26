import React from 'react';
import HomePic from "../../Images/HomePic.png";
import Button from 'react-bootstrap/Button';
import './HomeStyle.css';
import MiniCard from '../Card/HomeCard';

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
          <img src={HomePic} alt="Homepicture" />
        </div>

        <span className="sideTitles" >Recommended For You</span>

        <div className="swipperDiv">
          <MiniCard name={"A Million to one"} cover={"https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"} />
          <MiniCard name={"Amara the brave"} cover={"https://marketplace.canva.com/EAD7WWWtKSQ/1/0/251w/canva-purple-and-red-leaves-illustration-children%27s-book-cover-hNI7HYnNVQQ.jpg"} />
          <MiniCard name={"The king of drugs"} cover={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"} />
          <MiniCard name={"The Martian"} cover={"https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale"} />
          <MiniCard name={"Tress of the road"} cover={"https://images.squarespace-cdn.com/content/v1/5ae2fce87e3c3ae275ea2c9f/1526464175408-W92Q4MSAM40I8YF4HM64/ke17ZwdGBToddI8pDm48kG42nK5MxReh9N1Tgs_dc9t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXysNIcM8ERoy824r28kfN5DdNsbvYnFI46u1WARIoKesh_vZu_IHrh0xbom9DKbTA/tess-cover.jpg?format=1500w"} />
          <MiniCard name={"Story Book"} cover={"https://assets-2.placeit.net/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg"} />
          <MiniCard name={"City on the edge"} cover={"https://i.pinimg.com/originals/a4/aa/c1/a4aac1f3d86869bcfd2833e8be768014.jpg"} />
        </div>

        <span className="sideTitles" >Sditor's Choice</span>

        <div className="swipperDiv">
          <MiniCard name={"A Million to one"} cover={"https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"} />
          <MiniCard name={"Amara the brave"} cover={"https://marketplace.canva.com/EAD7WWWtKSQ/1/0/251w/canva-purple-and-red-leaves-illustration-children%27s-book-cover-hNI7HYnNVQQ.jpg"} />
          <MiniCard name={"The king of drugs"} cover={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"} />
          <MiniCard name={"The Martian"} cover={"https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale"} />
          <MiniCard name={"Tress of the road"} cover={"https://images.squarespace-cdn.com/content/v1/5ae2fce87e3c3ae275ea2c9f/1526464175408-W92Q4MSAM40I8YF4HM64/ke17ZwdGBToddI8pDm48kG42nK5MxReh9N1Tgs_dc9t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXysNIcM8ERoy824r28kfN5DdNsbvYnFI46u1WARIoKesh_vZu_IHrh0xbom9DKbTA/tess-cover.jpg?format=1500w"} />
          <MiniCard name={"Story Book"} cover={"https://assets-2.placeit.net/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg"} />
          <MiniCard name={"City on the edge"} cover={"https://i.pinimg.com/originals/a4/aa/c1/a4aac1f3d86869bcfd2833e8be768014.jpg"} />
        </div>

        <span className="sideTitles">Catagories</span>

        <div className="swipperDiv">
         <MiniCard name={"Fantasy"} cover={"https://www.rd.com/wp-content/uploads/2019/12/book-e1576790089347.jpg"} />
         <MiniCard name={"Detective and Mystery "} cover={"https://static.prod.abebookscdn.com/cdn/com/images/30-essential-mystery-authors/arthur-conan-doyle.jpg"} />
         <MiniCard name={"Comic Book"} cover={"https://www.sun-sentinel.com/resizer/1fuMDdJE7v3kltVnXX07CWZ58Ws=/415x614/top/www.trbimg.com/img-5caf8a09/turbine/fl-1555008005-hc4qu2941s-snap-image"} />
         <MiniCard name={"Classics "} cover={"https://cdn.shopify.com/s/files/1/0064/5342/8271/products/PCCP5-Penguin_Classics_Cameo_angle_1200_300x.jpg?v=1556052881"} />
         <MiniCard name={"Action and Adventure"} cover={"https://alisonmortonauthor.com/wp-content/uploads/2014/01/books.jpg"} />
         <MiniCard name={"Horror"} cover={"https://images.thestar.com/xN_oIrR10VL8zpaa1-hDq0ELBE8=/1086x1652/smart/filters:cb(1594158289211)/https://www.thestar.com/content/dam/thestar/entertainment/books/2020/07/09/horror-books-to-make-you-lose-your-cool-on-a-hot-summers-night/if_it_bleeds.jpg"} />
         <MiniCard name={"Romance"} cover={"https://pbs.twimg.com/media/EQuNRJoU0AAvyKD.jpg"} />
        </div>

      </div>
    </div>
  );
}
export default Home;