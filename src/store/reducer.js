let login = JSON.parse(localStorage.getItem('Authentication'));
let initialState;
if (login) {
  initialState = { isAuthenticated: true, user: login.user.name };
} else {
  initialState = { isAuthenticated: false };
}

export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'AUTH_USER':
      return {
        isAuthenticated: true,
        user: action.user.name
      };
    case 'UNAUTH_USER':
      return {
        isAuthenticated: false
      };
    default:
      return state;
  }
};
