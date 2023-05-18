import AsyncStorage from '@react-native-async-storage/async-storage';
import {datasend} from '../redux/actions/action';
import axios from 'axios';
export const ReqApi = (url, method, header, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      header: header,
      data: data,
    })
      .then(response => {
        return resolve(response);
      })
      .catch(error => {
        return reject(error);
      });
  });
};
// get api
export const getapi = (url, header = {}) => {
  return ReqApi(url, 'GET', header);
};
// post api
export const postApi = (url, data, header = {}) => {
  return ReqApi(url, 'POST', data, (header = {}));
};
export const GetAsync = async key => {
  let userData = await AsyncStorage.getItem(key);
  let allData = await JSON.parse(userData);
  if (allData) {
    datasend(true);
  }
};
export const AsyncSendData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('error occured', e);
  }
};

export const AsyncRemoveData = async key => {
  try {
    await AsyncStorage.removeItem(key);
    datasend(false);
  } catch (e) {
    console.log('error occured', e);
  }
};
