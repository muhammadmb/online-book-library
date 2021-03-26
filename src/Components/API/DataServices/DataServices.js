import axios from 'axios';
import { API_URL } from '../APIConstants';

class DataServices {

    GetGenres(PageNumber, PageSize) {
        return axios.get(`${API_URL}/Genres?fields=genreName,id,picUrl&PageNumber=${PageNumber}&PageSize=${PageSize}`);
    }

    GetBooksByGenre(genreId, fields, PageNumber, PageSize) {
        return axios.get(`${API_URL}/Genres/${genreId}/Books?fields=${fields}&PageNumber=${PageNumber}&PageSize=${PageSize}`);
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
}

export default new DataServices();