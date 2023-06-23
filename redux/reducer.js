import { ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER, RESET } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  originalCharacters: [], // Nueva propiedad para almacenar la lista original
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

      case REMOVE_FAVORITE:
        return { ...state, myFavorites: action.payload };
      
    case ORDER:
      let ordered;
      if (action.payload === "Ascendente") {
        ordered = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordered = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: [...ordered],
      };

   
    case FILTER:
       
          return {
            ...state,
            myFavorites: state.allCharacters.filter((character)=>character.gender=== action.payload)
          };
       

    case RESET:
      return {
        ...state,
        myFavorites: state.originalCharacters,
      };

    default:
      return {
        ...state}
         
  }
};

export default rootReducer;