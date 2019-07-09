import { COURSE__DATA } from '../type/type';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case COURSE__DATA:
      return {
        ...state,
        course: action.payload
      };

    default:
      return state;
  }
}
