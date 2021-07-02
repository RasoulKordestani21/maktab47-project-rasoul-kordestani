
import axios from 'axios';

export const getUser = async (a=3,b=5) => {
  let response;
  try {
    const one = 1;
    response = await axios.get(`http://localhost:3000/prodManTable?_start=${a}&_limit=${b}`);
    // console.log(response);
    
  } catch (error) {
    // console.error(error);
  }
  return response
}




