import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const WithdrawForm = ({onSubmit, account}) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup name="withdrawAmount" labelText="Withdraw Amount:">
        <Input name="amount" type="number" />
      </InputGroup>
      <Input name="accountId" type="hidden" value={account.id} />
      <Button type="submit" size="small" >Withdraw</Button>
    </form>
  );
};
export default WithdrawForm;