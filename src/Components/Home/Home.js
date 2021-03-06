import React, { useEffect, useState } from 'react';
import DataServices from "../API/DataServices/DataServices";
import HomePic from "../../Images/HomePic.png";
import './HomeStyle.css';
import MiniCard from '../Card/HomeCard';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from 'react-router-dom';

const Home = () => {

  const [classicsBooks, setClassicsBooks] = useState([]);
  const [action, setAction] = useState([]);
  const [genres, setGenres] = useState([]);
  const theme = localStorage.getItem("theme");
  const Skeletons = [1, 2, 3, 4, 5];

  useEffect(() => {
    const GetEditorsBooks = async () => {
      const result = await DataServices.GetBooksByGenre(`00000000-0000-0000-abcd-000000000000`, "id,booktitle,bookCover,genre", 1, 5);
      setClassicsBooks(result.data);
    }

    const GetGenres = async () => {
      const result = await DataServices.GetGenres(1, 10, "genreName,id,picUrl");
      setGenres(result.data);
    }

    const GetAction = async () => {
      const result = await DataServices.GetBooksByGenre(`00000000-0000-0000-abcd-000000000002`, "id,booktitle,bookCover,genre", 1, 5);
      setAction(result.data);
    }

    GetEditorsBooks();
    GetGenres();
    GetAction();

  }, []);

  const BooksList = (props) => (
    props.list.map(item =>
      <MiniCard
        key={item.id}
        name={item.bookTitle}
        page={`genre/${item.genre.id}/books/${item.id}`}
        cover={item.bookCover}
      />
    )
  )

  const GenresList = () => (
    genres.map(item =>
      <MiniCard
        key={item.id}
        name={item.genreName}
        page={`genre/${item.id}`}
        cover={item.picUrl}
      />
    )
  )

  const SkeletonView = () => (
    Skeletons.map(index =>
      <Skeleton key={index} className="Skeleton" variant="rect" width={175} height={260} />
    )
  )

  return (
    <div className="container">
      <div
        className={theme === 'light' ? "welcomeCard light" : "welcomeCard"}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="welcomeTexts">

          <h2 className={theme === 'light' ? "light" : ""}>Hi, welcome back!</h2>
          <h4 className={theme === 'light' ? "light" : ""}>Here is a customised world of books for you.</h4>

          <Link to="/books">
            <button className="button">
              Browse Latest
              </button>
          </Link>

        </div>
        <img src={HomePic} alt="Homepicture" />
      </div>

      <span className={theme === 'light' ? "light sideTitles" : "sideTitles"} >Classics</span>

      <div className="swipperDiv" >

        {
          classicsBooks.length === 0 ?
            <SkeletonView />
            :
            <BooksList list={classicsBooks} />
        }

      </div>

      <span className={theme === 'light' ? "light sideTitles" : "sideTitles"}>Action and Adventure</span>

      <div className="swipperDiv">
        {
          action.length === 0 ?
            <SkeletonView />
            :
            <BooksList list={action} />
        }
      </div>

      <span className={theme === 'light' ? "light sideTitles" : "sideTitles"}>Genres</span>

      <div className="swipperDiv">

        {
          genres.length === 0 ?
            <SkeletonView />
            :
            <GenresList />
        }

      </div>

    </div>
  );
}
export default Home;