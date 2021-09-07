import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from "../../../App";
import './Score.scss'



const Score = () => {
    const [{gameStart}] = useContext( GameContext )
    const updateTimer = start => start ? Date.now() - start : 0
    const [seconds, setSeconds] = useState( updateTimer(gameStart) );

    console.log( 'gameStart', gameStart )

    useEffect( () => {
        const interval = setInterval(() => {
            setSeconds( updateTimer(gameStart) )
        }, 1000);
        return () => clearInterval(interval);
    }, [gameStart])

  return (
      <div className="time">
        {seconds}s
      </div>
  );
};

export default Score;