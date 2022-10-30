import axiosApi from "../../axiosApi";

export function* registerUserSaga ({payload: userData}) {
  try {
    const response = yield axiosApi('./users', userData);


  } catch (e) {

  }
}