import axios from 'axios';

import { NEW__EXAMS, EDIT__EXAMS } from "../type/type";

// hooks
import useAuthenticate from "../../components/hooks/auth/useAuthenticate";

const { isAuthenticated } = useAuthenticate();

export const fetchNewExams = (exams) => dispatch => {
    const data = exams.formData;

    return fetch(`/exams/new/${isAuthenticated().user._id}`, {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: data
    })
        .then(res => {
            dispatch({
                type: NEW__EXAMS,
                payload: res.status
            });
        })
        .catch(err => {
            console.log(err);
        })
}