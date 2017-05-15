import {connect} from "react-redux";
import AccountsList from "../components/AccountsList";
import {select} from "../actions";

const mapStateToProps = state => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    accounts: state.accounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: e => {
      e.preventDefault();
      dispatch(select(e.target.innerHTML));
    }
  };
};

const AccountsListContainer = connect(mapStateToProps, mapDispatchToProps)(
  AccountsList
);

export default AccountsListContainer;
