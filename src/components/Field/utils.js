export const onOpenFirstCard = (openedCardId, openedCardKey) => (old) => {
    if( old.matched.length === 0 && !old.start ) {
        return {
            ...old, 
            opened: openedCardId,
            openedKeys: [openedCardKey],
            start: Date.now(),
        }
    }
    return {
        ...old, 
        opened: openedCardId,
        openedKeys: [openedCardKey]
    }
}

export const onMatchCards = (openedCardId) => (old) => {
    if( old.matched.length === 9) {
        return {
            ...old,
            matched: [...old.matched, openedCardId], 
            opened: null,
            openedKeys: [],
            end: Date.now(),
        }
    }
    return {
        ...old,
        matched: [...old.matched, openedCardId], 
        opened: null,
        openedKeys: []
    }
}

export const onOpenPair = (openedCardId, openedCardKey) => (old)=>{
    return {
        ...old, 
        opened: openedCardId,
        openedKeys: [...old.openedKeys, openedCardKey]
}}

export const onCloseUnmatched = () => (old) =>{
    return {
        ...old, 
        opened: null,
        openedKeys: [],
    }
}
