import React from 'react';
import About from './Components/About/About.js';
import NavBar from './Components/NavBar/NavigationBar.js';
import Home from './Components/Home/Home.js';
import BookCard from './Components/BookCard/BookCard.js';
import Footer from './Components/Footer/Footer.js';
import BookPage from './Components/BooksPage/BooksPage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        {/* <Home/> */}
        <Route exact path="/" component = {Home}/>
        <Route exact path="/books" component = {BookPage}/>
        {/* <BookCard/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
