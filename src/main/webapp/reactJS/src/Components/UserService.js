import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/getCustomerDetails';
const ORDRES_REST_API_URL = 'http://localhost:8080/api/getOrders';
const DELETE_CUSTOMER_REST_API_URL = 'http://localhost:8080/api/deleteCustomer/';
const DELETE_ORDER_REST_API_URL = 'http://localhost:8080/api/deleteOrder/';
const GET_ORDER_REST_API_URL = 'http://localhost:8080/api/getOrder/';
const POST_ORDER_UPDATE_REST_API_URL = 'http://localhost:8080/api/updateOrder/';
const GET_ORDER_DIST_REST_API_URL = 'http://localhost:8080/api/distriOrder/';
const POST_PLACE_ORDER_DIST_REST_API_URL = 'http://localhost:8080/api/placeOrder';

class UserService {

    // constructor() {
    //     this.state = {
    //         jwtToken: ""
    //     };
        
    // }

    getUsers(token){
        
        const option = {
            headers: {'Authorization': 'Bearer '+token},
        };
        return axios.get(USERS_REST_API_URL, option);
    }

    getOrders(token){
        const option = {
            headers: {'Authorization': 'Bearer '+token},
        };
        console.log(token+" JWT")
        return axios.get(ORDRES_REST_API_URL,option);
    }

    getDeleteCust(token, id){
        const option = {
            headers: {'Authorization': 'Bearer '+token},
        };
        console.log(token+" JWT")
        return axios.get(DELETE_CUSTOMER_REST_API_URL+id,option);

    }

    getDeleteOrder(token, id){
        const option = {
            headers: {'Authorization': 'Bearer '+token},
        };
        console.log(token+" JWT")
        return axios.get(DELETE_ORDER_REST_API_URL+id,option);

    }

    getOrderDetails(token, id){
        const option = {
            headers: {'Authorization': 'Bearer '+token},
        };
        console.log(token+" JWT")
        return axios.get(GET_ORDER_REST_API_URL+id,option);
    }

    postOrderUpdate(token, id, payload){
        const option = {
            //productName: name,
            headers: {'Authorization': 'Bearer '+token}
        };

        // const payload ={
        //     productName : name,
            
        //   };

        console.log(token+" uporder")
        return axios.post(POST_ORDER_UPDATE_REST_API_URL+id,payload, option);
    }

    getDistOrder(token, id){
        const option = {
            //productName: name,
            headers: {'Authorization': 'Bearer '+token}
        };

        
        console.log(token+" uporder")
        return axios.get(GET_ORDER_DIST_REST_API_URL+id, option);
    }

    postOrder(token, payload){
        const option = {
            //productName: name,
            headers: {'Authorization': 'Bearer '+token}
        };

        console.log(payload);
        return axios.post(POST_PLACE_ORDER_DIST_REST_API_URL,payload, option);
    }
}

export default new UserService();