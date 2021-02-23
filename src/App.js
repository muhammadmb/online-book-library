import React from 'react';
import About from './Components/About/About.js';
import NavBar from './Components/NavBar/NavigationBar.js';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer/Footer.js';
import BookPage from './Components/BooksPage/BooksPage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Contact from './Components/Connect/ContactUs.js';

import './App.css'
import authorPage from './Components/AuthorsPage/authorsPage.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Switch>
          <Route exact path="/" component = {Home}/>
            <Route exact path="/online-book-library" component = {Home}/>
            <Route exact path="/Home" component = {Home}/>
            <Route exact path="/books" component = {BookPage}/>
            <Route exact path="/authors" component = {authorPage}/>
            <Route exact path="/Connect" component = {Contact}/>
            <Route exact path="/about" component = {About}/>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
