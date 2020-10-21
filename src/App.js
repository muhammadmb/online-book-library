import React from 'react';
import About from './Components/About/About.js';
import NavBar from './Components/NavBar/NavigationBar.js';
import BookCard from './Components/BookCard/BookCard.js'
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
      </BrowserRouter>
    </div>
  );
}

export default App;
