import { GET__BLOG, NEW__BLOG } from "../type/type";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET__BLOG:
      return {
        ...state,
        blog: action.payload
      };

    case NEW__BLOG:
      return {
        ...state,
        blogStatus: action.payload
      };


    default:
      return state;
  }
}
