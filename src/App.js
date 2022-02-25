import React from 'react';
import './App.css'
import About from './Components/About/About.js';
import NavBar from './Components/NavBar/NavigationBar.js';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer/Footer.js';
import BookPage from './Components/BooksPage/BooksPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Components/Connect/ContactUs.js';
import AuthorsPage from './Components/AuthorsPage/AuthorsPage.js';
import BookInfo from './Components/BookInfoPage/BookInfo.js';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.js';
import Genres from './Components/GenresPage/Genres';
import AuthorInfo from './Components/AuthorInfoPage/AuthorInfo';
import Search from './Components/Search/Search';
import { useSelector } from "react-redux";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {

  const { Dark } = useSelector((state) => state.Theme);

  return (
    <div className={Dark ? "App" : "App light"}>
      <BrowserRouter>
        <NavBar />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/online-book-library" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/books" component={BookPage} />
            <Route exact path="/authors" component={AuthorsPage} />
            <Route exact path="/Connect" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route path="/genre/:genreId/books/:id" component={BookInfo} />
            <Route exact path="/genre/:id" component={Genres} />
            <Route exact path="/Authors/:Id" component={AuthorInfo} />
            <Route exact path="/search/:SearchQuery" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route path="/*" component={NotFoundPage} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
