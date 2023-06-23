import axios from "axios"

export const RESET="RESET"
export const ADD_FAVORITE="ADD_FAVORITE"
export const REMOVE_FAVORITE="REMOVE_FAVORITE"
export const ORDER="ORDER"
export const FILTER="FILTER"
export function addFavorite(character) {
   
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return (dispatch) => {
           axios.post(endpoint, character).then(({ data }) => {
              return dispatch({
                 type: ADD_FAVORITE,
                 payload: data,
              });
           });
        };
     };



export const removeFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAVORITE,
             payload: data,
       });
       });
    };
 
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