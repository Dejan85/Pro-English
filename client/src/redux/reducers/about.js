import { UPDATE__ABOUT, GET__ABOUT } from "../type/type";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET__ABOUT:
      return {
        ...state,
        about: action.payload
      };

    case UPDATE__ABOUT:
      return {
        ...state,
        aboutChangeStatus: action.payload
      };

    default:
      return state;
  }
}
