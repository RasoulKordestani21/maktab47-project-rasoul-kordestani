
import axios from 'axios';

export const getUser = async (a=3,b=5) => {
  let response;
  try {
    const one = 1;
    response = await axios.get(`http://localhost:3000/milks?_start=${a}&_limit=${b}`);
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




