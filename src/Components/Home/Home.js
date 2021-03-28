import React, { useEffect, useState } from 'react';
import DataServices from "../API/DataServices/DataServices";
import HomePic from "../../Images/HomePic.png";
import Button from 'react-bootstrap/Button';
import './HomeStyle.css';
import MiniCard from '../Card/HomeCard';
import Skeleton from '@material-ui/lab/Skeleton';


const Home = () => {

  const [classicsBooks, setClassicsBooks] = useState([]);
  const [any, setAny] = useState([]);
  const [genres, setGenres] = useState([]);
  const Skeletons = [1, 2, 3, 4, 5];

  useEffect(() => {
    const GetEditorsBooks = async () => {
      const result = await DataServices.GetBooksByGenre(`00000000-0000-0000-abcd-000000000000`, "id,booktitle,bookCover,genre", 1, 5);
      setClassicsBooks(result.data);
    }

    const GetGenres = async () => {
      const result = await DataServices.GetGenres(1, 10);
      setGenres(result.data);
    }

    const GetAny = async () => {
      const result = await DataServices.GetBooksByGenre(`00000000-0000-0000-abcd-000000000002`, "id,booktitle,bookCover,genre", 1, 5);
      setAny(result.data);
    }

    GetEditorsBooks();
    GetGenres();
    GetAny();

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
      <div>
        <div className="welcomeCard">
          <div className="welcomeTexts">
            <h2>Hi, welcome back!</h2>
            <h4 >Here is a customised world of books for you.</h4>
            <Button variant="outline-info" style={{ margin: 25 }}>Browse Latest</Button>
          </div>
          <img src={HomePic} alt="Homepicture" />
        </div>

        <span className="sideTitles" >Classics</span>

        <div className="swipperDiv">

          {
            classicsBooks.length === 0 ?
              <SkeletonView />
              :
              <BooksList list={classicsBooks} />
          }

        </div>

        <span className="sideTitles" >Action and Adventure</span>

        <div className="swipperDiv">
          {
            any.length === 0 ?
              <SkeletonView />
              :
              <BooksList list={any} />
          }
        </div>

        <span className="sideTitles">Genres</span>

        <div className="swipperDiv">

          {
            genres.length === 0 ?
              <SkeletonView />
              :
              <GenresList />
          }

        </div>

      </div>
    </div>
  );
}
export default Home;