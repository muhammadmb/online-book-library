import React from 'react';
import './App.css'
import About from './Components/About/About.js';
import NavBar from './Components/NavBar/NavigationBar.js';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer/Footer.js';
import BookPage from './Components/BooksPage/BooksPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './Components/Connect/ContactUs.js';
import authorPage from './Components/AuthorsPage/authorsPage.js';
import BookInfo from './Components/BookInfoPage/BookInfo.js';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.js';
import Genres from './Components/GenresPage/Genres';
import AuthorPage from './Components/AuthorInfoPage/AuthorInfo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/online-book-library" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/books" component={BookPage} />
          <Route exact path="/authors" component={authorPage} />
          <Route exact path="/Connect" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route path="/BookInfo" component={BookInfo} />
          <Route exact path="/genre" component={Genres} />
          <Route exact path="/Authors/:Id" component={AuthorPage} />
          <Route path="/*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
