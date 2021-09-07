import cn from 'classnames'
import { GameContext, ThemeContext } from '../../App'
import { useContext, useState } from 'react'
import './Card.scss'

export const Card = ({ classname, id, image, description, onClick }) => {
    const {theme, setTheme} = useContext(ThemeContext)
    const [{cards, openedCards}] = useContext( GameContext )
    const isOpened = cards.includes( id ) || openedCards.includes( id )

    return <div className={cn( classname, 'card', { ["card--opened"]: isOpened })} onClick={onClick}>
        <div className={ theme === "light" ? 'card__backside--light' : 'card__backside--dark' }></div>
        <div className={theme === "light" ? 'card__frontside--light' : 'card__frontside--dark'}>
            <img src={image} alt={description} />
        </div>
    </div>
}

// return <div className={cn( classname, 'card', { ["card--opened"]: isOpened })} onClick={onClick}>
// <div className="card__backside"></div>
// <div className="card__frontside">
//     <img src={image} alt={description} />
// </div>
// </div>