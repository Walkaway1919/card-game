import cn from 'classnames'
import { ThemeContext, CardsContext } from '../../App'
import { useContext } from 'react'
import './Card.scss'

export const Card = ({ classname, id, main, image, description, onClick }) => {
    const {theme} = useContext(ThemeContext)
    const {game: {matched, openedKeys}} = useContext( CardsContext )
    const isOpened = matched.includes( main ) || openedKeys.includes( id )

    return <div className={cn( classname, 'card', { "card--opened": isOpened })} onClick={onClick}>
        <div className={ cn(
            'card__backside',
            {
                'card__backside--light': theme === "light",
                'card__backside--dark': theme !== "light",
            }
        ) }></div>
        <div className={
            cn(
                'card__frontside',
                {
                    'card__frontside--light': theme === "light",
                    'card__frontside--dark': theme !== "light",
                }
            )
        }>
            <img src={image} alt={description} />
            <div className='tooltip'>{description}</div>
        </div>
    </div>
}

