import React, { useEffect } from 'react';
import './GenreListStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from '../../Store/GenreSlice';
import GenreCard from '../Cards/GenreCard/GenreCard';
import LoadingAnimation from '../Loading/LoadingAnimation/LoadingAnimation';

const GenreList = () => {
    const { genres, isLoading } = useSelector((state) => state.Genre);
    const Dispatch = useDispatch();

    useEffect(() => {
        Dispatch(getGenres({
            fields: "genreName, id ,picUrl",
            PageNumber: 1,
            PageSize: 8
        }));
    }, [Dispatch]);

    return (
        <div className='genre-list'>
            {
                !isLoading ?
                    genres.map(item =>
                        <GenreCard
                            key={item.id}
                            data={item}
                        />
                    )
                    :
                    <LoadingAnimation />
            }
        </div>
    )
}

export default GenreList;