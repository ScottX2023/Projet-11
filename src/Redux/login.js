import { setToken } from "./auth";

export const loginUser = (email, password) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const responseData = await response.json();
      const token = responseData.body.token;

      dispatch(setToken(token));
      console.log('API Response:', responseData);
      console.log('Token:', token);
  
      return responseData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  