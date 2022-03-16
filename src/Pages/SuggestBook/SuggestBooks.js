import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import DataServices from '../../API/DataServices/DataServices';
import Alert from '@material-ui/lab/Alert';
import { Debounce } from '../../Helper/Helper';
import './SuggestBooksStyle.css';

const SuggestBooks = () => {

    const [genres, setGenres] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [genresSearchQuery, setGenresSearchQuery] = useState("");
    const [authorsSearchQuery, setAuthorsSearchQuery] = useState("");
    const [openGenresOptions, setOpenGenresOptions] = useState(false);
    const [openAuthorsOptions, setOpenAuthorsOptions] = useState(false);
    const [suggestBody, setSuggestBody] = useState({});
    const [genreValue, setGenreValue] = useState("");
    const [authorValue, setAuthorValue] = useState("");
    const { Dark } = useSelector((state) => state.Theme);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const GetSearchGenres = async () => {
            const parameters = {
                fields: "id, genreName",
                SearchQuery: genresSearchQuery,
                pageNumber: 1,
                pageSize: 10
            }
            const result = await DataServices.GetGenres(parameters);
            setGenres(result.data);
        }
        GetSearchGenres();
    }, [genresSearchQuery]);

    useEffect(() => {
        const GetAuthors = async () => {
            const parameters = {
                fields: "id,name",
                SearchQuery: authorsSearchQuery,
                pageNumber: 1,
                pageSize: 10
            }
            const result = await DataServices.GetAuthorsSearch(parameters);
            setAuthors(result.data);
        }
        GetAuthors();
    }, [authorsSearchQuery]);

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(suggestBody)
        try {
            DataServices.AddSuggestBook(suggestBody)
                .then((response) =>
                    setStatus(response.status)
                );
            setSuggestBody({});
            setGenreValue("");
            setAuthorValue("");
            setTimeout(() => {
                setStatus(null);
            }, 10000);
        }
        catch (err) {
            setStatus(err.response.status);
            setTimeout(() => {
                setStatus(null);
            }, 10000);
        }
    }

    const handelGenreChange = (value) => {
        setGenresSearchQuery(value);
    }

    const handelAuthorChange = (value) => {
        setAuthorsSearchQuery(value);
    }

    const DebouncedGenreChange = useCallback(Debounce(handelGenreChange), []);
    const DebouncedAuthorChange = useCallback(Debounce(handelAuthorChange), []);

    return (
        <div className='container'>
            <div className={Dark ? "suggest-book" : "suggest-book light"}>

                <form onSubmit={handelSubmit}>
                    <h1>thanks for your submition</h1>

                    <input
                        type='email'
                        value={suggestBody.email ? suggestBody.email : ""}
                        placeholder='Email'
                        onChange={(e) => {
                            setSuggestBody(suggestBody => ({
                                ...suggestBody,
                                email: e.target.value
                            }))
                            setOpenGenresOptions(false)
                        }}
                        required
                    />

                    <input
                        type='text'
                        value={suggestBody.bookTitle ? suggestBody.bookTitle : ""}
                        placeholder='Book Title'
                        onChange={(e) => {
                            setSuggestBody(suggestBody => ({
                                ...suggestBody,
                                bookTitle: e.target.value
                            }))
                            setOpenGenresOptions(false)
                        }}
                        required
                    />

                    <div className="datalist">
                        <input
                            value={genreValue}
                            placeholder='Genre'
                            onChange={(event) => {
                                setGenreValue(event.target.value);
                                DebouncedGenreChange(event.target.value);
                            }}
                            onFocus={() => {
                                setOpenGenresOptions(true);
                            }}
                            onBlur={() => {
                                setTimeout(() => {
                                    setOpenGenresOptions(false);
                                }, 100)
                            }}
                            required
                        />
                        {
                            openGenresOptions &&
                            genres.length !== 0 &&
                            <ul className='options'>
                                {
                                    genres.map((genre) => (
                                        <li
                                            key={genre.id}
                                            onClick={() => {
                                                setGenreValue(genre.genreName);
                                                setSuggestBody(suggestBody => ({
                                                    ...suggestBody,
                                                    genreId: genre.id
                                                }))
                                                setOpenGenresOptions(false)
                                            }}
                                        >
                                            {genre.genreName}
                                        </li>
                                    ))
                                }
                            </ul>
                        }

                    </div>

                    <div className="datalist">
                        <input
                            value={authorValue}
                            placeholder='Author'
                            onChange={(event) => {
                                setAuthorValue(event.target.value);
                                DebouncedAuthorChange(event.target.value);
                            }}
                            onFocus={() => {
                                setOpenAuthorsOptions(true);
                            }}
                            onBlur={() => {
                                setTimeout(() => {
                                    setOpenAuthorsOptions(false);
                                }, 100)
                            }}
                        />
                        {
                            openAuthorsOptions &&
                            authors.length !== 0 &&
                            <ul className='options'>
                                {
                                    authors.map((author) => (
                                        <li
                                            key={author.id}
                                            onClick={() => {
                                                setAuthorValue(author.name);
                                                setSuggestBody(suggestBody => ({
                                                    ...suggestBody,
                                                    authorId: author.id
                                                }))
                                                setOpenGenresOptions(false)
                                                setOpenAuthorsOptions(false)
                                            }}
                                        >
                                            {author.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        }

                    </div>

                    <input
                        type='url'
                        placeholder='Book Cover (optional)'
                        value={suggestBody.bookCover ? suggestBody.bookCover : ""}
                        onChange={(e) => {
                            setSuggestBody(suggestBody => ({
                                ...suggestBody,
                                bookCover: e.target.value
                            }))
                            setOpenGenresOptions(false)
                        }}
                    />

                    <input
                        type='date'
                        value={suggestBody.dateOfPublish ? suggestBody.dateOfPublish : ""}
                        onChange={(e) => {
                            setSuggestBody(suggestBody => ({
                                ...suggestBody,
                                dateOfPublish: e.target.value
                            }))
                            setOpenGenresOptions(false)
                        }}
                    />

                    <input
                        type='number'
                        placeholder='number of pages (optional)'
                        value={suggestBody.numberOfBookPages ? suggestBody.numberOfBookPages : ""}
                        onChange={(e) => {
                            setSuggestBody(suggestBody => ({
                                ...suggestBody,
                                numberOfBookPages: Number(e.target.value)
                            }))
                            setOpenGenresOptions(false)
                        }}
                    />

                    <input
                        type='text'
                        placeholder='publisher (optional)'
                        value={suggestBody.publisher ? suggestBody.publisher : ""}
                        onChange={(e) => {
                            setSuggestBody(suggestBody => ({
                                ...suggestBody,
                                publisher: e.target.value
                            }))
                            setOpenGenresOptions(false)
                        }}
                    />

                    <textarea
                        placeholder='Describtion (optional)'
                        value={suggestBody.description ? suggestBody.description : ""}
                        onChange={(e) => {
                            setSuggestBody(suggestBody => ({
                                ...suggestBody,
                                description: e.target.value
                            }))
                            setOpenGenresOptions(false)
                        }}
                    />
                    {
                        status === 201 ?
                            <Alert className="error-alert" severity="success">your suggestion is on proccess</Alert>
                            :
                            status !== null &&
                            <Alert className="error-alert" severity="error">something went wrong try again</Alert>
                    }
                    <input type='submit' />
                </form>
                <div className="message">
                    <h2>we appriciate your support</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error, voluptate consequatur perferendis eaque impedit sequi incidunt saepe, repudiandae velit eveniet excepturi at commodi. Adipisci saepe fuga neque rem accusantium!</p>
                </div>
            </div>
        </div>
    )
}

export default SuggestBooks;