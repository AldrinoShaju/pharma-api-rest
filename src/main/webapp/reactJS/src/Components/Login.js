import { Component } from "react";
import DistributorPage from "./DistributorPage";
import CustomerPage from "./CustomerPage";
import LoginState from "./LoginState";
import Register from "./Register";
import AdminPage from "./AdminPage";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    switch (this.props.authType) {
      case "Administrator":
        return this.props.isAdmin ? (
          <AdminPage />
        ) : (
          <LoginState authType={this.props.authType} />
        );
      case "Customer":
        if (this.props.toRegister) return <Register />;
        else if (this.props.isCustomer) return <CustomerPage />;
        else return <LoginState authType={this.props.authType} />;

      case "Distributor":
        return this.props.isDistributor ? (
          <DistributorPage />
        ) : (
          <LoginState authType={this.props.authType} />
        );

      default:
        break;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    isAdmin: state.admin,
    isDistributor: state.distributor,
    isCustomer: state.customer,
    toRegister: state.register,
    ordersData: state.ordersData
  };
};

export default connect(mapStateToProps)(Login);
