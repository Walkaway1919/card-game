import { Header } from './components/Header/Header'
import { Field }  from './components/Field/Field'
import React, { useState } from 'react';
import './App.scss';
import "./styles/reset.css";
import {Score} from './components/Header/Score/Score.jsx'
import { Footer } from './components/Footer/Footer';

const defaultContext = {
  ratingTable: [],
  gameStart: null,
  openedCards: [],
}
export const GameContext = React.createContext();
export const ThemeContext = React.createContext()

function App() {

  const [cards, setCards] = useState( [] ) 
  const [openedCards, setOpenedCards] = useState( [] ) 
  const [comparedCards, setComparedCards] = useState( [] ) 
  const [gameStart, setGameStart] = useState( null ) 

  const [theme, setTheme] = useState("light")

  return (
    <div className={ theme === "light" ? 'memory--light' : 'memory--dark' }>
      <ThemeContext.Provider value={{theme, setTheme}}>
      <GameContext.Provider value={ [ {cards, openedCards, comparedCards, gameStart}, {setCards, setOpenedCards, setComparedCards, setGameStart} ] } >
        <Header />
        <Field />
        <Footer/>
      </GameContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
