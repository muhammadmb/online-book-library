import React, { useState, useEffect } from 'react';
import DataServices from '../API/DataServices/DataServices';
import AuthorCard from '../AuthorCard/AuthorCard';
import './authorPageStyle.css';
import Skeleton from '@material-ui/lab/Skeleton';

const AuthorPage = () => {

    const [isLoad, setIsLoad] = useState(false);
    const [authorData, setAuthorData] = useState([]);

    useEffect(() => {
        const GetAuthors = async () => {
            const result = await DataServices.GetAuthors();
            setAuthorData(result.data);
            setIsLoad(true);
        }

        GetAuthors();
    }, [])

    return (
        <div className="container">

            {
                isLoad ?
                    <div className="AuthorPage">
                        {
                            authorData.map((item) => (
                                <AuthorCard
                                    key={item.id}
                                    src={item.pictureUrl}
                                    name={item.name}
                                    description={item.bio}
                                    dateOfBirth={item.dateOfBirth.substring(0, 4)}
                                    dateOfDeath={item.dateOfDeath != null ? item.dateOfDeath.substring(0, 4) !== "0001" ? item.dateOfDeath.substring(0, 4) : "" : ""}
                                    page={`/Authors/${item.id}`}
                                />
                            ))
                        }
                    </div>
                    :
                    <div className="AuthorPage">
                        <Skeleton className="skeleton" variant="rect" width={335} height={540} />
                        <Skeleton className="skeleton" variant="rect" width={335} height={540} />
                        <Skeleton className="skeleton" variant="rect" width={335} height={540} />
                        <Skeleton className="skeleton" variant="rect" width={335} height={540} />
                    </div>
            }

        </div>

    );
}

export default AuthorPage;