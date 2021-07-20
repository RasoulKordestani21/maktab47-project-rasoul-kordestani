
import { keys } from '@material-ui/core/styles/createBreakpoints';
import axios from 'axios';
import { baseURL } from './baseURL';


export const getUser = async (a = 3, b = 5) => {
  let response;
  try {
    const one = 1;
    response = await axios.get(`${baseURL}/dairy?_start=${a}&_limit=${b}`);
    // console.log(response);

  } catch (error) {
    // console.error(error);
  }
  return response
}

export const getAdminData = async (a = 3, b = 5) => {
  let response;
  try {
    const one = 1;
    response = await axios.get(`${baseURL}/admins`);
    // console.log(response);

  } catch (error) {
    // console.error(error);
  }
  return response
}

export const getCustomers = async (a = 3, b = 5) => {
  let response;
  try {
    const one = 1;
    response = await axios.get(`${baseURL}/customers`);
    // console.log(response);

  } catch (error) {
    // console.error(error);
  }
  return response
}

export const getCustomersItem = async (a = 3, b = 5) => {

  let response;
  try {
    const one = 1;
    response = await axios.get(`${baseURL}/customers`);
    response = await response.then(res => res.data);

  } catch (error) {
    // console.error(error);
  }
  return response
}

export const patchModifiedItems = async (changes) => {

  console.log(changes)
  let response;
  try {
    response = await axios.patch(`${baseURL}/dairy/${changes.id}`, changes);
    response = await response.then(res => console.log(res.data));

  } catch (error) {

  }
  return response
}

export const editProductWithModal = async (id, changes) => {
  console.log(id, changes)
  changes = { image: changes.imgOfProduct, name: changes.nameOfProduct, baseGroup: changes.groupOfProduct, description: changes.descOfProduct }
  
  for (let item in changes) {
    if (changes[item] == '') {
      delete changes[item]
    }
  }
  console.log(changes)
  let response;
  try {
    response = await axios.patch(`${baseURL}/dairy/${id}`, changes);
    response = await response.then(res => console.log(res.data));

  } catch (error) {

  }
  return response
}

export const testGet = async (id) => {

  let response;
  try {
    response = await axios.get(`${baseURL}/test/88`);
    response = await response.then(res => console.log(res.data));

  } catch (error) {

  }
  return response
}

export const deleteProduct = async (id) => {
  console.log(id)
  let response;
  try {
    const one = 1;
    response = await axios.delete(`${baseURL}/dairy/${id}`);
    // console.log(response);

  } catch (error) {
    // console.error(error);
  }
  return response
}

export const postData = async (data) => {
  // console.log(data)
  var formdata = new FormData();
  formdata.append("image", data.imgOfProduct.files[0], "/C:/Users/ASC/Desktop/54PV5Aa.jpg");
  formdata.append("id", 33);
  formdata.append("name", data.nameOfProduct);
  formdata.append("baseGroup", data.groupOfProduct);
  formdata.append("description", data.descOfProduct);
  console.log(data.nameOfProduct, data.groupOfProduct, data.descOfProduct, data.imgOfProduct);
  console.log(data.groupOfProduct.length)
  console.log((`${baseURL}/${data.groupOfProduct}`))
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  console.log('salam')
  fetch(`${baseURL}/${data.groupOfProduct}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
