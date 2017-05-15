import {connect} from "react-redux";
import TransferForm from "../components/TransferForm";
import {transfer} from "../actions";
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
      const fromAccount = Number(data.accountId);
      const toAccount = Number(data.to);
      console.log(fromAccount);
      console.log(toAccount);
      console.log(amount);
      dispatch(transfer({ fromAccount, toAccount, amount }));
    }
  };
};

const TransferFormContainer = connect(null, mapDispatchToProps)(
  TransferForm
);

export default TransferFormContainer;