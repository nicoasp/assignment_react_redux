import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const TransferForm = ({onSubmit, account}) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup name="withdrawAmount" labelText="Transfer Amount:">
        <Input name="amount" type="number" />
      </InputGroup>
      <InputGroup name="toAccount" labelText="Receiving Account:">
        <Input name="to" type="number" />
      </InputGroup>      
      <Input name="accountId" type="hidden" value={account.id} />
      <Button type="submit" size="small" >Transfer</Button>
    </form>
  );
};
export default TransferForm;