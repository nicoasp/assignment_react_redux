import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const DepositForm = () => {
  return (
    <form>
      <InputGroup name="depositAmount" labelText="Deposit Amount:">
        <Input type="number" />
      </InputGroup>
      <Button size="small">Deposit</Button>
    </form>
  );
};
export default DepositForm;
