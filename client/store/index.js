import { createStore } from 'redux';
const INITIAL_STATE = {
      loginState: "",
      usuarioState: "",
      senhaState: "",
      erroState:""
}
function reducer(state = INITIAL_STATE, action) {
  console.log(action)
  return state
}


const store = createStore(reducer);

export default store;
