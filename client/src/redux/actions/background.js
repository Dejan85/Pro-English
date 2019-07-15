import { BACKGROUND } from "../type/type";
const background = "../../../sass/images/9.1.jpg";

export const getBackground = () => dispatch => {
  console.log(background);
  return dispatch({
    type: BACKGROUND,
    payload: background,
  });
};
