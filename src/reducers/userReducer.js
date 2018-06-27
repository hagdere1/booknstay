import userInitState from '../initState/user.json';

export default function(state = userInitState, action) {
  switch(action.type) {
    case "FETCH_TOKEN_SUCCESS":
      return Object.assign({}, state, {token: action.payload})
  }
  return state;
}
