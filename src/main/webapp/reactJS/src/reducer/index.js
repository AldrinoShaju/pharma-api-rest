const initState = {
  admin: false,
  distributor: false,
  customer: false,
  register: false,
  token: ""
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "IS_ADMIN":
      return { admin: !state.admin, token: action.token };
    case "IS_DISTRIBUTOR":
      return { distributor: !state.distributor, token: action.token };
    case "IS_CUSTOMER":
      return { customer: !state.customer, token: action.token };
    case "NEW_USER":
      return { register: !state.register };
    default:
      return state;
  }
};
export default reducer;
