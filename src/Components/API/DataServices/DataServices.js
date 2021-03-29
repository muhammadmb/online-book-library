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

}

export default new DataServices();