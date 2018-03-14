import {START_GAME, GUESS} from '../actions/types'
const initialState = {
  wrongGuessCount: 0,
  guesses: [],
  word: 'randomWord'
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case START_GAME :
      return initialState;
    case GUESS :
    if (!state.guesses.includes(action.payload)) {
     if (state.word.indexOf(action.payload) === -1) {
       //state.wrongGuessCount += 1
       console.log(state.wrongGuessCount)
       return {
         word: state.word,
         guesses: state.guesses,
         wrongGuessCount: state.wrongGuessCount+1
       }
     }
     }
     return state
     default: return state
   }
 }
