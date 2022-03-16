import axios from 'axios';
import { API_URL } from '../APIConstants';

class DataServices {

    async GetGenres(parameters) {
        const { fields, pageNumber, pageSize, SearchQuery } = parameters;
        return await axios.get(
            `${API_URL}/Genres?${fields ? `fields=${fields}` : ''}${SearchQuery ? `&SearchQuery=${SearchQuery}` : ''}${pageNumber ? `&PageNumber=${pageNumber}` : ''}${pageSize ? `&PageSize=${pageSize}` : ''}`
        );
    }

    async GetGenre(id, fields) {
        return await axios.get(`${API_URL}/Genres/${id}?fields=${fields}`);
    }

    async GetBooksByGenre(parameters) {
        const { genreId, fields, sortby, yearOfPublish, pageNumber, pageSize, author } = parameters;
        return await axios.get(
            `${API_URL}/Genres/${genreId ? genreId : '00000000-0000-0000-0000-000000000000'}/Books?${author ? `author=${author}` : ''}${fields ? `&fields=${fields}` : ''}${pageNumber ? `&PageNumber=${pageNumber}` : ''}${pageSize ? `&PageSize=${pageSize}` : ''}${sortby ? `&sortby=${sortby}` : ''}${yearOfPublish ? `&YearOfPublish=${yearOfPublish}` : ''}`
        )
    }

    async GetBookSearch(parameters) {
        const { fields, SearchQuery, pageNumber, pageSize } = parameters;
        return await axios.get(
            `${API_URL}/Genres/00000000-0000-0000-0000-000000000000/Books?${fields ? `fields=${fields}` : ''}${SearchQuery ? `&SearchQuery=${SearchQuery}` : ''}${pageNumber ? `&PageNumber=${pageNumber}` : ''}${pageSize ? `&PageSize=${pageSize}` : ''}`
        );
    }

    async GetBookDetails(genreId, bookId) {
        return await axios.get(`${API_URL}/Genres/${genreId}/Books/${bookId}`);
    }

    async GetReviews(parameters) {
        const { genreId, bookId, fields, pageNumber, pageSize } = parameters;
        return await axios.get(`${API_URL}/Genres/${genreId}/Books/${bookId}/reviews?${fields ? `fields=${fields}` : ''}${pageNumber ? `&PageNumber=${pageNumber}` : ''}${pageSize ? `&PageSize=${pageSize}` : ''}`);
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

    async GetAuthor(authorId) {
        return await axios.get(`${API_URL}/Authors/${authorId}`);
    }

    async GetAuthors() {
        return await axios.get(`${API_URL}/Authors?fields=id,name,bio,pictureUrl,dateOfBirth,dateOfDeath`);
    }

    async GetAuthorsSearch(parameters) {
        const { fields, SearchQuery, pageNumber, pageSize } = parameters;
        return await axios.get(`${API_URL}/Authors?${fields ? `fields=${fields}` : ''}&SearchQuery=${SearchQuery}${pageNumber ? `&PageNumber=${pageNumber}` : ''}${pageSize ? `&PageSize=${pageSize}` : ''}`);
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

    async AddSuggestBook(suggestBook) {
        return await axios.post(
            `${API_URL}/Suggestions`,
            suggestBook
        )
    }

}

export default new DataServices();