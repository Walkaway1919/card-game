import cn from 'classnames'
import { GameContext } from '../../App'
import { useContext, useState } from 'react'
import './Card.scss'

export const Card = ({ classname, id, image, description, onClick }) => {
    const [{cards, openedCards}] = useContext( GameContext )
    const isOpened = cards.includes( id ) || openedCards.includes( id )

    return <div className={cn( classname, 'card', { ["card--opened"]: isOpened })} onClick={onClick}>
        <div className="card__backside"></div>
        <div className="card__frontside">
            <img src={image} alt={description} />
        </div>
    </div>
}