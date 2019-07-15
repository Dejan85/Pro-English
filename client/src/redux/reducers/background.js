import { BACKGROUND } from "../type/type";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case BACKGROUND:
      return {
        ...state,
        course: action.payload,
      };

    default:
      return state;
  }
}
