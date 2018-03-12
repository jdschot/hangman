const initialState = {
  guesses: []
};

export default function(state = initialState, action = {}) {

  if (action.type === 'LETTER'){
    return {
      ...state, guesses: state.guesses.concat(action.payload)
    }
  }
  return state
}
