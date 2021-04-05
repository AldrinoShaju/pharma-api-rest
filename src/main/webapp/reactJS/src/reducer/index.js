const initState = {
  admin: false,
  distributor: false,
  customer: false,
  register: false,
  
  customersData:[],
  productsData:[],
  ordersData:[
    {
      amount: 101.8,
      minQuantity: 10,
      netCost: 20,
      orderId: "6069827e63ef160cd4679db1",
      orderQueue: 12,
      productCode: "606979ed5d86be0934a212db",
      productName: "Aminophylline : 225 mg"
    }
  ],
  token: ""
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "IS_ADMIN":
      return { ...state, admin: !state.admin, token: action.token };
    case "IS_DISTRIBUTOR":
      return { ...state, distributor: !state.distributor, token: action.token };
    case "IS_CUSTOMER":
      return { ...state, customer: !state.customer, token: action.token };
    case "NEW_USER":
      return { ...state, register: !state.register };

    case "CUSTOMERS_DATA":
      return { ...state, customersData: action.cust };
    case "PRODUCTS_DATA":
      return { ...state, productsData: action.prod };
    case "ORDERS_DATA":
      return { ...state, ordersData: action.ord };
    default:
      return state;
  }
};
export default reducer;
