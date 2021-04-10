import axios from 'axios';
import { API_URL } from '../APIConstants';

class DataServices {

    GetGenres(PageNumber, PageSize, fields) {
        return axios.get(`${API_URL}/Genres?fields=${fields}&PageNumber=${PageNumber}&PageSize=${PageSize}`);
    }

    GetGenre(id) {
        return axios.get(`${API_URL}/Genres/${id}`);
    }

    GetBooksByGenre(genreId, fields, PageNumber, PageSize, sortby) {
        return axios.get(`${API_URL}/Genres/${genreId}/Books?fields=${fields}&PageNumber=${PageNumber}&PageSize=${PageSize}&sortby=${sortby}`);
    }

    GetBookSearch(fields, SearchQuery) {
        return axios.get(`${API_URL}/Genres/00000000-0000-0000-0000-000000000000/Books?fields=${fields}&SearchQuery=${SearchQuery}`);
    }

    GetBookDetails(genreId, bookId) {
        return axios.get(`${API_URL}/Genres/${genreId}/Books/${bookId}`);
    }

    CreateCommentToPost(genreId, bookId, reviewerName, email, reviewDescription, bookRate) {

        const postData = {
            reviewerName,
            email,
            reviewDescription,
            bookRate,
            bookId
        }
        return axios.post(`${API_URL}/Genres/${genreId}/Books/${bookId}/reviews`,
            postData
        ).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    GetAuthor(authorId) {
        return axios.get(`${API_URL}/Authors/${authorId}`);
    }

    GetAuthors() {
        return axios.get(`${API_URL}/Authors?fields=id,name,bio,pictureUrl,dateOfBirth,dateOfDeath`);
    }

    GetAuthorsSearch(SearchQuery) {
        return axios.get(`${API_URL}/Authors?fields=id,name,bio,pictureUrl,dateOfBirth,dateOfDeath&SearchQuery=${SearchQuery}`);
    }

    UpdateUpVote(genreId, bookId, reviewId, vote, path) {
        return axios.patch(`${API_URL}/Genres/${genreId}/Books/${bookId}/reviews/${reviewId}`,
            [
                {
                    "op": "replace",
                    "path": `/${path}`,
                    "value": vote
                }
            ]
        );
    }
}

export default new DataServices();