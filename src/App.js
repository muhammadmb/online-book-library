import React from 'react';
import About from './Components/About/About.js';
import NavBar from './Components/NavBar/NavigationBar.js';
import Home from './Components/Home/Home.js'
import BookCard from './Components/BookCard/BookCard.js'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Home/>
        {/* <BookCard/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
