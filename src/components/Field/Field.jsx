import { useContext, useEffect, useState } from "react";
import cn from 'classnames';
import { Card } from "../Card/Card";
import { GameContext, ThemeContext } from '../../App'
import './Field.scss';

import abelisaurus from '../../assets/img/abelisaurus.png'
import brachiosaurus from "../../assets/img/brachiosaurus.png";
import chasmosaurus from "../../assets/img/chasmosaurus.png";
import elasmosaurus from "../../assets/img/elasmosaurus.png";
import epidexipteryx from "../../assets/img/epidexipteryx.png";
import eromangasaurus from "../../assets/img/eromangasaurus-extinguished.png";
import mamenchisaurus from "../../assets/img/mamenchisaurus.png";
import monoclonius from "../../assets/img/monoclonius.png";
import pterodactyl from "../../assets/img/pterodactyl.png";
import tyrannosaurus from "../../assets/img/tyrannosaurus.png";


const cards = [
    <Card id="abelisaurus" image={abelisaurus} />,
    <Card id="brachiosaurus" image={brachiosaurus} />,
    <Card id="chasmosaurus" image={chasmosaurus} />,
    <Card id="elasmosaurus" image={elasmosaurus} />,
    <Card id="epidexipteryx" image={epidexipteryx} />,
    <Card id="eromangasaurus" image={eromangasaurus} />,
    <Card id="mamenchisaurus" image={mamenchisaurus} />,
    <Card id="monoclonius" image={monoclonius} />,
    <Card id="pterodactyl" image={pterodactyl} />,
    <Card id="tyrannosaurus" image={tyrannosaurus} />,

]

export const Field = (classname) => {

    const [gameContext, setGameContext] = useContext( GameContext )
    const {theme} = useContext( ThemeContext )
    console.log('theme',theme)

    const [gameCards, setGameCards] = useState( [] )

    const onClickCard = (openedCardId, openedCardKey) => () => {
        if( !gameContext.cards.length && !gameContext.openedCards.length ){
            setGameContext.setGameStart( Date.now() )
        }
        setGameContext.setOpenedCards( ( oldOpenedCards ) => {
            return [ ...oldOpenedCards, openedCardKey ]
        })
        setGameContext.setComparedCards( ( oldComparedCards ) => {
            return [ ...oldComparedCards, openedCardId ]
        })
    }
    
    useEffect( () => {
        setGameCards(
            [ ...cards, ...cards ].sort(() => Math.random() - 0.5).map( (card, index) => {
                return <card.type {...card.props} 
                    key={card.props.id + index} 
                    id={card.props.id + index} 
                    onClick={onClickCard( card.props.id, card.props.id + index )} 
                />
            })
        )
    }, [])

    useEffect( () => {
        if( gameContext.comparedCards.length === 2 ){
            if( gameContext.comparedCards[0] === gameContext.comparedCards[1] ){
                setGameContext.setCards( oldCards => {
                    return [ ...oldCards, ...gameContext.openedCards ]
                })
            }
            setTimeout( () => {
                setGameContext.setOpenedCards([])
                setGameContext.setComparedCards([])
            }, 500)
        }
    }, [gameContext.openedCards])
    
    return <div className={cn( classname, 'cardboard')}>{gameCards}</div>
}