import { api, apiget, loginReducer, signpage } from "../reducers/Statemange";
import { store } from "../store";
const dispatch= store.dispatch
export const datasend = (data) => {
    dispatch(loginReducer(data));
  };
export const namedata = (data) => {
    dispatch(signpage(data));
  };
  export const datapi = (data) => {
    dispatch(api(data));
  };
  // export const getdata = (data) => {
  //   dispatch(apiget(data));
  // };