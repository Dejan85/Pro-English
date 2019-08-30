import {
  NEW__EVENT,
  GET__EVENT,
  DELETE__EVENT,
  UPDATE__EVENT
} from "../type/type";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET__EVENT:
      return {
        ...state,
        events: action.payload
      };
    case NEW__EVENT:
      return {
        ...state,
        eventsChangeStatus: action.payload
      };

    case UPDATE__EVENT:
      return {
        ...state,
        eventsChangeStatus: action.payload
      };

    case DELETE__EVENT:
      return {
        ...state,
        eventsChangeStatus: action.payload
      };

    default:
      return state;
  }
}
