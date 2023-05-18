import axios from "axios";
import { getapi, postApi } from "../../utilis/utilis";
export const Getdata = (url) => {
  return new Promise((resolve, reject) => {
      getapi(url)
      .then((res) => { return resolve(res)})
      .catch((er) => { return reject(er)});
  });
};
 export const Postdata=(url,data,header={})=>{
  return new Promise((resolve, reject) => {
      postApi(url,data,header)
      .then((res)=>{return resolve(res)})
      .catch((err) =>{return reject(er)})
  })
 }