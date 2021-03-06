import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const DepositForm = ({onSubmit, account}) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup name="depositAmount" labelText="Deposit Amount:">
        <Input name="amount" type="number" />
      </InputGroup>
      <Input name="accountId" type="hidden" value={account.id} />
      <Button type="submit" size="small" >Deposit</Button>
    </form>
  );
};
export default DepositForm;
