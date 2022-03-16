import React from 'react';
import './App.css'
import About from './Pages/About/About.js';
import NavBar from './Layouts/NavBar/NavigationBar.js';
import Home from './Pages/Home/Home.js';
import Footer from './Layouts/Footer/Footer.js';
import BookPage from './Pages/BooksPage/BooksPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Pages/Connect/ContactUs.js';
import BookInfo from './Pages/BookInfoPage/BookInfo.js';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.js';
import Genres from './Pages/GenresPage/Genres';
import AuthorInfo from './Pages/AuthorInfoPage/AuthorInfo';
import Search from './Pages/Search/Search';
import { useSelector } from "react-redux";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import SuggestBooks from './Pages/SuggestBook/SuggestBooks';

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
            <Route exact path="/Connect" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route path="/genre/:genreId/books/:id" component={BookInfo} />
            <Route exact path="/genre/:id" component={Genres} />
            <Route exact path="/Authors/:Id" component={AuthorInfo} />
            <Route exact path="/search/:SearchQuery" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/Add-book" component={SuggestBooks} />
            <Route path="/*" component={NotFoundPage} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
