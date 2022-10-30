import axiosApi from "../../axiosApi";


export const FETCH_DEVELOPMENTS_REQUEST = 'FETCH_DEVELOPMENTS_REQUEST';
export const FETCH_DEVELOPMENTS_SUCCESS = 'FETCH_DEVELOPMENTS_SUCCESS';
export const FETCH_DEVELOPMENTS_FAILURE = 'FETCH_DEVELOPMENTS_FAILURE';

export const fetchDevelopmentsRequest = () => ({type: FETCH_DEVELOPMENTS_REQUEST});
export const fetchDevelopmentsSuccess = developments => ({type: FETCH_DEVELOPMENTS_SUCCESS, payload: developments});
export const fetchDevelopmentsFailure = error => ({type: FETCH_DEVELOPMENTS_FAILURE, payload: error});

