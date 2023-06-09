import { ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER, RESET } from "./actions";

const initialState={
    myFavorites: [],
    allCharacters: []
}


const rootReducer=(state=initialState,action )=>{
switch (action.type) {
    case ADD_FAVORITE:
        return{
            ...state,
            myFavorites:[...state.myFavorites,action.payload],
            allCharacters: [...state.myFavorites,action.payload]
        }  
        case REMOVE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(characters=> characters.id !==Number(action.payload))
            } 
    case ORDER:
    let ordenados;
        if(action.payload === "Ascendente"){
            ordenados=state.myFavorites.sort((a,b)=>a.id > b.id ? 1 : -1)

        }else{
            ordenados=state.myFavorites.sort((a,b)=>b.id > a.id ? 1 : -1)
        }
        return{ 
            ...state,
            myFavorites: [...ordenados]
    }

case FILTER:
    return{
        ...state,
        myFavorites:state.myFavorites.filter((characters)=> characters.id !==Number(action.payload))
    }
case RESET:
    return{
        ...state,
        myFavorites:[state.myFavorites]
    }

    default:
        return{...state};
 
}

}

export default rootReducer;