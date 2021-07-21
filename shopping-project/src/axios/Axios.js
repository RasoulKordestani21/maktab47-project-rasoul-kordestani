
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
  }catch (error) {
      // console.error(error);
    }
    return response
}
  
export const getSideBarData = async () => {
  let response;
  try {
    const one = 1;
    response = await axios.get(`http://localhost:3000/productAndProductGroup`);
    // console.log(response);
    
  } catch (error) {
    // console.error(error);
  }
  return response
}

export const getDairy = async (start=3,limit=5) => {
  let response;
  try {
    const one = 1;
    response = await axios.get(`http://localhost:3000/dairy?_start=${start}&_limit=${limit}`);
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

export const getHealthWashing = async (a=3,b=5) => {
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

export const getProductDetail = async (category,id) => {
  let response;
  try {
    response = await axios.get(`http://localhost:3000/${category}?id=${id}`);
    // console.log(response);
    
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


  export const postUserData = async (userData) => {
  
  await axios.post('http://localhost:3000/userSpecifics', {
    firstName: userData.firstName,
    lastName: userData.lastName,
    address:userData.address,
    phoneNumber:userData.phoneNumber,
    dateOfSend:userData.dateOfSend
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
    response = await axios.delete(`${baseURL}/dairy/${id}`);
    // console.log(response);

  } catch (error) {
    // console.error(error);
  }
  return response
}

export const postData = async (data) => {
  let response;
  response = await axios.get(`${baseURL}/dairy`).then(res=>res.data)
 await console.log(response.length)
  
      var formdata =await new FormData();
    await  formdata.append("image", data.imgOfProduct.files[0], "/C:/Users/ASC/Desktop/54PV5Aa.jpg");
    await formdata.append("id", response.length+1);
    await formdata.append("name", data.nameOfProduct);
    await formdata.append("baseGroup", data.groupOfProduct);
    await formdata.append("description", data.descOfProduct);
    await console.log(data.nameOfProduct, data.groupOfProduct, data.descOfProduct, data.imgOfProduct);
    await console.log(data.groupOfProduct.length)
    await console.log((`${baseURL}/${data.groupOfProduct}`))
  
   var requestOptions = await{
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
 await  console.log('salam')
 await  fetch(`${baseURL}/${data.groupOfProduct}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export const ReceivedProduct = async (id) => {
  let time = (new Date()).getTime();
  let response;
  console.log(id, time);
  try {
    response = await axios.patch(`${baseURL}/customers/${id}`, { dateOfReceive: time ,isReceived:true});
  } catch (error) {
    console.log(error);
  }
  return response
}