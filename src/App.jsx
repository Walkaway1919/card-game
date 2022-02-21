import { Header } from './components/Header/Header'
import { Field }  from './components/Field/Field'
import cn from 'classnames';
import React, { useState } from 'react';
import './App.scss';
import "./styles/reset.css";

export const ThemeContext = React.createContext();
export const CardsContext = React.createContext();

function App() {

  const [game, setGame] = useState({
    matched: [],
    opened: null,
    openedKeys: [],
    start: null,
    end: null,
  });

  const [theme, setTheme] = useState("light")

  return (
    <div className={cn(
      "memory",
      { "memory--light": theme === "light" },
      { "memory--dark": theme !== "light" }
    )}>       
      <ThemeContext.Provider value={{theme, setTheme}}>
        <CardsContext.Provider value={{game, setGame}}>
            <Header />
            <Field />
        </CardsContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
