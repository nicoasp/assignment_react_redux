import {connect} from "react-redux";
import AccountsList from "../components/AccountsList";




const mapStateToProps = state => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    accounts: state.accounts
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     purchaseItem: id => {
//       dispatch(purchaseItem(id));
//     }
//   };
// };

const AccountsListContainer = connect(mapStateToProps, null)(
  AccountsList
);

export default AccountsListContainer;