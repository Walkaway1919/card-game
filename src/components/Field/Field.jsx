import { useContext, useEffect, useState } from "react";
import cn from 'classnames';
import { CardsContext } from '../../App'
import './Field.scss';
import cards from './cards';
import { onOpenFirstCard, onMatchCards, onOpenPair, onCloseUnmatched } from './utils';

export const Field = (classname) => {
    const {game, setGame} = useContext( CardsContext )
    const [gameCards, setGameCards] = useState( [] )
    const { start } = game

    const onClickCardNew = (openedCardId, openedCardKey) => (e) => {
        const { matched, openedKeys, opened, end } = game
        console.log(end)
        if(openedKeys.length === 2){
            e.preventDefault()
            return 
        }
        if(matched.includes(openedCardId)) {
            e.preventDefault()
            return 
        }
        if(openedKeys.includes(openedCardKey)) {
            e.preventDefault()
            return 
        }
        if(openedKeys.length === 0){
            setGame(
                onOpenFirstCard(openedCardId, openedCardKey)
            );
            return 
        }

        if(opened === openedCardId){ // match!
            setGame(
                onMatchCards(openedCardId)
            );
        } else {
            setGame(
                onOpenPair(openedCardId, openedCardKey)
             );
            setTimeout( () => {
                setGame(onCloseUnmatched() );
            }, 1000)
        }
    }
    const cardsAll = [ ...cards, ...cards ]
    const cardsPosition = cardsAll.map( (card, index) => {
        return card.props.id + index
    })
    const cardsAssociativeObject = cardsAll.reduce( (final, card, index) => ({
        ...final, 
        [card.props.id + index]: <card.type {...card.props} 
            key={card.props.id + index} 
            id={card.props.id + index} 
            main={card.props.id}
            onClick={onClickCardNew( card.props.id, card.props.id + index )} 
        />
    }), {})

    useEffect( () => {
        if(!start) {
            setGameCards(
                cardsPosition.sort(() => Math.random() - 0.5)
            )
        }
    }, [start])


    return <div className={cn( classname, 'cardboard')}>{gameCards.map( cardKey => cardsAssociativeObject[cardKey])}</div>
}