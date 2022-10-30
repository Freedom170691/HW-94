import {all} from 'redux-saga/effects';
import developmentsSagas from "./sagas/developmentsSagas";
import userSagas from "./sagas/usersSagas";

export default function* rootSagas(){
  yield all([
    ...developmentsSagas,
    ...userSagas,
  ])
}