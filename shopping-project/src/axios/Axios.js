
import axios from 'axios';

export const getUser = async () => {
  let response;
  try {
    response = await axios.get('https://fakestoreapi.com/products?limit=5');
    // console.log(response);
    
  } catch (error) {
    // console.error(error);
  }
  return response
}




