import { GET__EVENT } from "../type/type";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET__EVENT:
      return {
        ...state,
        events: action.payload
      };

    default:
      return state;
  }
}
