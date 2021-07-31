
import { keys } from '@material-ui/core/styles/createBreakpoints';
import axios from 'axios';
import { baseURL } from './baseURL';

//##########################################################
//#######################update requests####################
//##########################################################

export const getProducts = () => {
  let response
  try {
    response = axios.get(`${baseURL}/products`);
  }
  catch (err) {
    console.log(err)
  }
  return response;
}

export const postProductsData = (data) => {

  let formdata = new FormData();
  formdata.append("image", data.image.files[0]);
  formdata.append("name", data.name);
  formdata.append("baseGroup", data.baseGroup);
  formdata.append("description", data.description);
  formdata.append("group", data.group);
  formdata.append('groupToPersian', data.groupToPersian);
  formdata.append('price', data.price)
  let requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  fetch(`${baseURL}/products`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export const postOrders = (data) => {
  // data.user = JSON.parse(JSON.stringify(data.user));
  data.products = JSON.stringify(data.products)
  console.log(data);
  let formdata = new FormData();
  formdata.append("products", data.products);
  formdata.append("firstName", data.user.firstName);
  formdata.append("lastName", data.user.lastName);
  formdata.append("address", data.user.address);
  formdata.append("phoneNumber", data.user.phoneNumber);
  formdata.append("dateOfSend", data.user.dateOfSend);
  formdata.append("dateOfOrder", data.user.dateOfOrder);
  
  let requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  fetch(`${baseURL}/orders`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


export const getOrders = () => {
  let response;
  try {
    response = axios.get(`${baseURL}/orders`);

  } catch (error) {
    console.log(response);
  }
  return response
}


export const editProductWithModal = (id, changes) => {
  console.log(id, changes);
  let response;
  try {
    response = axios.patch(`${baseURL}/products/${id}`, changes);
    response = response.then(res => res.data);

  } catch (error) {
    console.log(response);
  }
  return response
}

export const getProductDetail = (category, id) => {
  let response;
  try {
    response = axios.get(`${baseURL}/products?id=${id}&group=${category}`);

  } catch (error) {
    console.error(error);
  }
  return response
}


export const getCustomersItem = (id) => {
  console.log(id);
  let response;
  try {
    console.log(`${baseURL}/orders/${id}`);
    response = axios.get(`${baseURL}/orders/${id}`);
    // response =  response.then(res => res.data);
  } catch (error) {
    console.error(error);
  }
  return response
}

export const ReceivedProduct =  (id) => {
  let time = (new Date()).getTime();
  let response;
  console.log(id, time);
  try {
    response =  axios.patch(`${baseURL}/orders/${id}`, { dateOfReceive: time, isReceived: true });
  } catch (error) {
    console.log(error);
  }
  return response
}

export const patchModifiedItems = (changes) => {
  console.log(changes);
  let response;
  try {
    response = axios.patch(`${baseURL}/products/${changes.id}`, changes);
    // response =  response.then(res => console.log(res.data));

  } catch (error) {

  }
  return response
}

export const getSideBarData =  () => {
  let response;
  try {
    response =  axios.get(`http://localhost:3000/productAndProductGroup`);

  } catch (error) {
    console.error(error);
  }
  return response
}
//##########################################################
//#######################    THE END      ####################
//##########################################################


/////////////////

export const getUser = (a = 'default', b = 'default') => {
  let response;
  try {
    if (a == 'default' && b == 'default') {
      console.log('whole data wanted');
      response = axios.get(`${baseURL}/products`)
    }
    else {
      console.log(' not whole data wanted')
      response = axios.get(`${baseURL}/products?_start=${a}&_limit=${b}`)
    }
    // response = await axios.get(`${baseURL}/dairy?_start=${a}&_limit=${b}`);
    // // console.log(response);

  } catch (error) {
    console.error(error);
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



export const getDairy = (start = 3, limit = 5) => {
  let response;
  try {
    const one = 1;
    response = axios.get(`http://localhost:3000/dairy?_start=${start}&_limit=${limit}`);

  } catch (error) {
    console.error(error);
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

export const getHealthWashing = async (a = 3, b = 5) => {
  let response;
  try {
    const one = 1;
    response = await axios.get(`http://localhost:3000/health-Washing?_start=${a}&_limit=${b}`);
    // console.log(response);

  } catch (error) {
    // console.error(error);
  }
  return response
}






// export const editProductWithModal = async (id, changes) => {
//   console.log(id, changes)

//   // try {
//   //   response = await axios.patch(`${baseURL}/dairy/${id}`, changes);
//   //   response = await response.then(res => console.log(res.data));

//   // } catch (error) {

//   // }
//   // return response
// }


export const postUserData = async (userData) => {

  await axios.post('http://localhost:3000/userSpecifics', {
    firstName: userData.firstName,
    lastName: userData.lastName,
    address: userData.address,
    phoneNumber: userData.phoneNumber,
    dateOfSend: userData.dateOfSend
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
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
    response = await axios.delete(`${baseURL}/products/${id}`);
    // console.log(response);

  } catch (error) {
    // console.error(error);
  }
  return response
}



