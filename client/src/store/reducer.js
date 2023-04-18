import store from "./store";

const reducer = (state = store, action) => {
  switch (action.type) {
    case "value":
      break;
    case "Posts_To_Store":
      state.posts = action.payload
      return state
    default:
      return state
  }
}

export default reducer


