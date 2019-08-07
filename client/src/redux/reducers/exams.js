import { EXAMS__GRE } from '../type/type';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case EXAMS__GRE:
      return {
        ...state,
        gre: action.payload
      };

    default:
      return state;
  }
}
