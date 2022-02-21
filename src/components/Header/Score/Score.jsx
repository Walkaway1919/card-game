import React, { useState, useEffect, useContext } from 'react';
import { CardsContext } from '../../../App';
import './Score.scss'

const time = (ms) =>{
    const seconds = Math.round(ms / 1000);
    const formatSeconds = seconds % 60;
    const formatMinutes = Math.floor(seconds / 60)

    return `${ formatMinutes > 9 ? formatMinutes : `0${formatMinutes}`} : ${ formatSeconds > 9 ? formatSeconds : `0${formatSeconds}`}`
    
}
const Score = () => {
    const { game } = useContext(CardsContext); // {game, setGame}
    const { start: gameStart, end: gameEnd } = game 
    const updateTimer = start => start ? Date.now() - start : 0
    const [miliseconds, setMiliseconds] = useState( updateTimer(gameStart) );


    useEffect( () => {
        if( !gameEnd ) {
            const interval = setInterval(() => {
                setMiliseconds( updateTimer(gameStart) )
            }, 1000);
            return () => clearInterval(interval);
        }
        setMiliseconds( gameEnd - gameStart);
    }, [gameStart, gameEnd])

  return (
    <div className="time">
        <div className="score">{
            miliseconds
                ? `время: ${time(miliseconds)}`
                : 'Начните игру'
        }
        </div>
        {gameEnd && <div className="message">Игра окончена</div>}
    </div>
  );
};

export default Score;