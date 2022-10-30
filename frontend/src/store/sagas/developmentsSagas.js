import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../axiosApi";
import {
  FETCH_DEVELOPMENTS_REQUEST,
  fetchDevelopmentsFailure,
  fetchDevelopmentsSuccess
} from "../actions/developmentsActions";
import {addNotification} from "../actions/notifierActions";

export  function* fetchDevelopments() {
  try {
    const response = yield axiosApi('/developments');
    yield put(fetchDevelopmentsSuccess(response.data));

  } catch (e) {
    yield put(fetchDevelopmentsFailure(e.error));
    yield put(addNotification('Fetch to developments failed'));
  }
}

const developmentsSagas = [
  takeEvery(FETCH_DEVELOPMENTS_REQUEST, fetchDevelopments),
];

export  default developmentsSagas;