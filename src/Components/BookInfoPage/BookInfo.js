import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './BookInfoStyle.css';
import MiniCard from '../Card/HomeCard';
import BooksRate from '../books Rate/BooksRate';
import CreateComment from '../CreateComment/CreateComment';
import Reviews from '../Reviews/Reviews';

const BookInfo = (props) =>{


    let authorLink = `/${props.authorLink}`;

    return(
        <div className="container">
            <div className="bookInfo">
                <div className="leftSection">
                    <div className="imgDiv">
                        <img src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt = "book cover" title="book title"/>
                    </div>
                    <span>Published 2020</span>
                    <span>Pages 458</span>
                    <span>Publisher Lorem</span>
                </div>

                <div className="rightSection">
                    <h1>Book title</h1>
                    <span>By <Link className="link" to = {authorLink}>Authro</Link></span>
                    <Box className="rating" borderColor="transparent">
                        <Rating name="hover-feedback" precision={0.5} value={0} readOnly/>
                    </Box>
                    <span>(0 Reviews)</span>
                    <div className="Clear"></div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor fermentum arcu, quis sodales ante fringilla sed. Suspendisse enim est, auctor auctor cursus et, posuere et quam. Phasellus interdum magna augue, in gravida lectus scelerisque ac. Quisque cursus lacus id iaculis bibendum. Curabitur suscipit fermentum pellentesque. Vestibulum eu accumsan nibh, eu tincidunt massa. In hac habitasse platea dictumst. Aenean rutrum mi eros, non semper lectus semper id. Integer elit lorem, tempor ac dignissim eu, imperdiet eu nibh. Quisque eget gravida neque, nec fermentum nibh. Phasellus molestie semper ullamcorper. Suspendisse enim est, auctor auctor cursus et, posuere et quam. Phasellus interdum magna augue, in gravida lectus scelerisque ac. Quisque cursus lacus id iaculis bibendum. Curabitur suscipit fermentum pellentesque. Vestibulum eu accumsan nibh, eu tincidunt massa. In hac habitasse platea dictumst. Aenean rutrum mi eros, non semper lectus semper id. Integer elit lorem, tempor ac dignissim eu, imperdiet eu nibh. Quisque eget gravida neque, nec fermentum nibh. Phasellus molestie semper ullamcorper.
                   </p>
                </div>
                <div className="Clear"></div>
                <hr/>

                <BooksRate />
                <CreateComment />
                <Reviews />

                <hr/>

                <span className="suggestionSpan">Editor's Choice</span>
                <div className="books">
                    <MiniCard name={"Amara the brave"} cover={"https://marketplace.canva.com/EAD7WWWtKSQ/1/0/251w/canva-purple-and-red-leaves-illustration-children%27s-book-cover-hNI7HYnNVQQ.jpg"} />
                    <MiniCard name={"The king of drugs"} cover={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"} />
                    <MiniCard name={"The Martian"} cover={"https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale"} />
                    <MiniCard name={"Tress of the road"} cover={"https://images.squarespace-cdn.com/content/v1/5ae2fce87e3c3ae275ea2c9f/1526464175408-W92Q4MSAM40I8YF4HM64/ke17ZwdGBToddI8pDm48kG42nK5MxReh9N1Tgs_dc9t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXysNIcM8ERoy824r28kfN5DdNsbvYnFI46u1WARIoKesh_vZu_IHrh0xbom9DKbTA/tess-cover.jpg?format=1500w"} />
                    <MiniCard name={"Story Book"} cover={"https://assets-2.placeit.net/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg"} />
                </div>

                <span className="suggestionSpan">Popular books in {props.catagory}</span>
                <div className="books">
                    <MiniCard name={"Amara the brave"} cover={"https://marketplace.canva.com/EAD7WWWtKSQ/1/0/251w/canva-purple-and-red-leaves-illustration-children%27s-book-cover-hNI7HYnNVQQ.jpg"} />
                    <MiniCard name={"The king of drugs"} cover={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"} />
                    <MiniCard name={"The Martian"} cover={"https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale"} />
                    <MiniCard name={"Tress of the road"} cover={"https://images.squarespace-cdn.com/content/v1/5ae2fce87e3c3ae275ea2c9f/1526464175408-W92Q4MSAM40I8YF4HM64/ke17ZwdGBToddI8pDm48kG42nK5MxReh9N1Tgs_dc9t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXysNIcM8ERoy824r28kfN5DdNsbvYnFI46u1WARIoKesh_vZu_IHrh0xbom9DKbTA/tess-cover.jpg?format=1500w"} />
                    <MiniCard name={"Story Book"} cover={"https://assets-2.placeit.net/smart_templates/e639b9513adc63d37ee4f577433b787b/assets/wn5u193mcjesm2ycxacaltq8jdu68kmu.jpg"} />
                </div>

            </div>
            
            
        </div>
    );
}

export default BookInfo;