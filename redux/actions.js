


export const RESET="RESET"
export const ADD_FAVORITE="ADD_FAVORITE"
export const REMOVE_FAVORITE="REMOVE_FAVORITE"
export const ORDER="ORDER"
export const FILTER="FILTER"
export function addFavorite(character) {
    return{
        type:ADD_FAVORITE,
        payload:character
    }
}


export function removeFavorite(id) {
    return {
        type:REMOVE_FAVORITE,
        payload:id 
    }
}

export function orderFavorites(order) {
    return{
        type:ORDER,
        payload:order
    }
    // el payload el lo puso id pero marcaba error hay q revisar 
}

export function fiterFavorites(gender) {
    return{
        type:FILTER,
        payload:gender
    }
}

export function resetFavorites() {
    return{
        type:RESET,
       
    }
}