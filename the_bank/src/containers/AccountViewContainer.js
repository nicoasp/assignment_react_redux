import {connect} from "react-redux";
import AccountView from "../components/AccountView";

const mapStateToProps = state => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props

  return {
    account: state.selectedUser
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     purchaseItem: id => {
//       dispatch(purchaseItem(id));
//     }
//   };
// };

const AccountViewContainer = connect(mapStateToProps, null)(AccountView);

export default AccountViewContainer;
