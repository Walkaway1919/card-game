import React, { useContext } from 'react';
import cn from 'classnames';
import { ThemeContext, CardsContext } from '../../../App';
import './StartButton.scss';



const StartButton = () => {
    const {theme} = useContext(ThemeContext)
    const { setGame } = useContext(CardsContext);

    const onGameRestart = () => {
        setGame({
            matched: [],
            opened: null,
            openedKeys: [],
            start: null,
            end: null,
        })
    }

    return (
        <div
        className={ cn(
            'button',
            {
            'button--light': theme === "light",
            'button--dark': theme !== "light",
            }
        )} 
         onClick={onGameRestart}>
            <span className="text">начать заново</span>
            <svg
                className={ cn(
                    'arrow',
                    {
                    'arrow--light': theme === "light",
                    'arrow--dark': theme !== "light",
                    }
                )} 
                width="13px" height="10px" viewBox="0 0 13 10">
                <path  d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
            
        </div>
    );
};

export default StartButton;