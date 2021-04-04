export const isLogin = (token) => {
  return {
    type: "IS_ADMIN",
    token
  };
};
export const isDistributor = (token) => {
  return {
    type: "IS_DISTRIBUTOR",
    token
  };
};
export const isCustomer = (token) => {
  return {
    type: "IS_CUSTOMER",
    token
  };
};
export const register = () => {
  return {
    type: "NEW_USER"
  };
};
