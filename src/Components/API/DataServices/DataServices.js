import axios from 'axios';
import { API_URL } from '../APIConstants';

class DataServices {

    GetGenres(PageNumber, PageSize, fields) {
        return axios.get(`${API_URL}/Genres?fields=${fields}&PageNumber=${PageNumber}&PageSize=${PageSize}`);
    }

    GetGenre(id, fields) {
        return axios.get(`${API_URL}/Genres/${id}?fields=${fields}`);
    }

    GetBooksByGenre(parameters) {
        const { genreId, fields, sortby, yearOfPublish, pageNumber, pageSize, author } = parameters;
        return axios.get(
            `${API_URL}/Genres/${genreId ? genreId : '00000000-0000-0000-0000-000000000000'}/Books?${author ? `author=${author}` : ''}${fields ? `&fields=${fields}` : ''}${pageNumber ? `&PageNumber=${pageNumber}` : ''}${pageSize ? `&PageSize=${pageSize}` : ''}${sortby ? `&sortby=${sortby}` : ''}${yearOfPublish ? `&YearOfPublish=${yearOfPublish}` : ''}`
        )
    }

    GetBookSearch(fields, SearchQuery) {
        return axios.get(`${API_URL}/Genres/00000000-0000-0000-0000-000000000000/Books?fields=${fields}&SearchQuery=${SearchQuery}`);
    }

    GetBookDetails(genreId, bookId) {
        return axios.get(`${API_URL}/Genres/${genreId}/Books/${bookId}`);
    }

    GetReviews(parameters) {
        const { genreId, bookId, fields, pageNumber, pageSize } = parameters;
        return axios.get(`${API_URL}/Genres/${genreId}/Books/${bookId}/reviews?${fields ? `fields=${fields}` : ''}${pageNumber ? `&PageNumber=${pageNumber}` : ''}${pageSize ? `&PageSize=${pageSize}` : ''}`);
    }

    async CreateCommentToPost(genreId, bookId, reviewerName, email, reviewDescription, bookRate) {

        const postData = {
            reviewerName,
            email,
            reviewDescription,
            bookRate,
            bookId
        }
        console.log(postData)
        return await axios.post(`${API_URL}/Genres/${genreId}/Books/${bookId}/reviews`,
            postData
        ).then((response) => {
        }, (error) => {
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

    async UpdateVote(genreId, bookId, reviewId, vote, path) {
        return await axios.patch(`${API_URL}/Genres/${genreId}/Books/${bookId}/reviews/${reviewId}`,
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