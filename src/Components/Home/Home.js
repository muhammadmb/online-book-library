import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import DataServices from "../API/DataServices/DataServices";
import './HomeStyle.css';
import BookCard from '../Cards/BookCard/BookCard';
import HomeBanner from '../HomeBanner/HomeBanner';
import BookLoading from '../Loading/BookLoading/BookLoading';
import RecommendationBanner from '../RecommendationBanner/RecommendationBanner';
import GenreList from '../GenreList/GenreList';

const Home = () => {

  const [recentBooks, setRecentBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [topRatedBooks, setTopRatedBooks] = useState([]);
  const { Dark } = useSelector((state) => state.Theme);
  const genreId = '00000000-0000-0000-0000-000000000000';
  const fields = "id,booktitle,bookCover,genre,bookRating,author";

  useEffect(() => {
    const GetPopularBooks = async () => {
      const parameters = {
        genreId,
        fields,
        sortby: "popularity",
        pageNumber: 1,
        pageSize: 5
      }
      const result = await DataServices.GetBooksByGenre(parameters);
      setPopularBooks(result.data);
    }

    const GetTopRatedBooks = async () => {
      const parameters = {
        genreId,
        fields,
        sortby: "rating",
        pageNumber: 1,
        pageSize: 5
      }
      const result = await DataServices.GetBooksByGenre(parameters);
      setTopRatedBooks(result.data);
    }

    const GetRecentBooks = async () => {
      const parameters = {
        genreId,
        fields,
        yearOfPublish: new Date().getFullYear(),
        pageNumber: 1,
        pageSize: 5
      }
      const result = await DataServices.GetBooksByGenre(parameters);
      setRecentBooks(result.data);
    }
    GetRecentBooks();
    GetTopRatedBooks();
    GetPopularBooks();
  }, []);

  const BooksList = (props) => (
    props.list.map(item =>
      <BookCard
        key={item.id}
        data={item}
      />
    )
  );

  return (
    <>
      <div className="container">
        <HomeBanner />

        {
          recentBooks.length === 0 && recentBooks.length === 0 && topRatedBooks.length === 0 ?
            <BookLoading />
            :
            <div className={Dark ? 'books-home' : 'books-home light'}>
              <span className="side-titles">Most recent published</span>

              <div className="swipper" >
                <BooksList list={recentBooks} />
              </div>

              <span className="side-titles">Popular Books</span>

              <div className="swipper" >
                <BooksList list={popularBooks} />
              </div>

              <span className="side-titles">Get more</span>
              <GenreList />

              <span className="side-titles">Top Rated Books</span>

              <div className="swipper" >
                <BooksList list={topRatedBooks} />
              </div>
            </div>
        }

      </div>
      <RecommendationBanner />
    </>
  );
}
export default Home;