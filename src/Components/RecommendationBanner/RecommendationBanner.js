import React, { useEffect, useState } from 'react';
import './RecommendationBannerStyle.css';
import { Link } from 'react-router-dom';
import DataServices from '../API/DataServices/DataServices';

const RecommendationBanner = () => {

    const [recommendation, setRecommendation] = useState([]);

    useEffect(() => {
        const GetRecommendationBooks = async () => {
            const parameters = {
                genreId: '00000000-0000-0000-0000-000000000000',
                fields: "id,booktitle,bookCover,genre",
                pageNumber: 1,
                pageSize: 13
            }
            const result = await DataServices.GetBooksByGenre(parameters);
            setRecommendation(result ? result.data : []);
        }
        GetRecommendationBooks();
    }, [])

    return (
        <div className='recommendation-banner'>
            <h4>THE BEST BOOKS ARE WAITING FOR YOU</h4>
            <div className='recommendation-books'>
                {
                    recommendation.map((item) => (
                        <Link key={item.id} to={`/${`genre/${item.genre.id}/books/${item.id}`}`}>
                            <img src={item.bookCover} alt={item.bookTitle} />
                        </Link>
                    ))
                }
            </div>
            <Link to="/Books" >
                <button>Discover more</button>
            </Link>
        </div>
    )
}

export default RecommendationBanner;