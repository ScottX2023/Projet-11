import { setUserData } from "./user";

export const fetchUserProfile = () => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;
  
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user profile data');
      }
  
      const responseData = await response.json();
  
      const { firstName, lastName, userName } = responseData.body;
      dispatch(setUserData({ firstName, lastName, userName }));
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };
 