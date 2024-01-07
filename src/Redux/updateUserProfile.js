import { updateUserName } from "./user";

export const updateUserProfile = (userName) => {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'accept': 'application/json',
      },
      body: JSON.stringify({ userName }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update user profile');
        }
        return response.json();
      })
      .then(responseData => {
        console.log('Response data:', responseData);
        dispatch(updateUserName(responseData.body.userName));
      })
      .catch(error => {
        console.error('Error updating user profile:', error);
      });
  };
};
