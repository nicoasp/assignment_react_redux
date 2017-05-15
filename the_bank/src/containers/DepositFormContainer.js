import {connect} from "react-redux";
import DepositForm from "../components/DepositForm";
import {deposit} from "../actions";
import serialize from "form-serialize";

// const mapStateToProps = state => {
//   // Pass in all puppies and the value of the current filter
//   // to get the correct set of puppies to pass to props
//   return {
//     accounts: state.accounts
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, {hash: true});
      const amount = Number(data.amount);
      const accountId = Number(data.accountId);
      dispatch(deposit({ accountId, amount }));
    }
  };
};

const DepositFormContainer = connect(null, mapDispatchToProps)(
  DepositForm
);

export default DepositFormContainer;