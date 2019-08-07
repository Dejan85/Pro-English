import {
  EXAMS__GRE,
  EXAMS__IELTS,
  EXAMS__GMAT,
  EXAMS__BOCCONI
} from '../type/type';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case EXAMS__GRE:
      return {
        ...state,
        gre: action.payload
      };

    case EXAMS__IELTS:
      return {
        ...state,
        ielts: action.payload
      };

    case EXAMS__GMAT:
      return {
        ...state,
        gmat: action.payload
      };

    case EXAMS__BOCCONI:
      return {
        ...state,
        bocconi: action.payload
      };

    default:
      return state;
  }
}
