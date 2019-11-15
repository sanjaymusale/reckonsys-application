export const authUser = user => {
  return {
    type: 'AUTH_USER',
    user
  };
};
export const unAuthUser = () => {
  return {
    type: 'UNAUTH_USER'
  };
};
