import React, {PropTypes} from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const AddItem = ({onSubmit}) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>
      Add An Item
      {" "}
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h1>
    <InputGroup name="name" labelText="Name">
      <Input name="name" />
    </InputGroup>
    <InputGroup name="description" labelText="Description">
      <Input name="description" />
    </InputGroup>
    <InputGroup name="amount" labelText="Amount">
      <Input name="amount" defaultValue="1" />
    </InputGroup>
    <InputGroup name="category" labelText="Category">
      <Input name="category" defaultValue="Food" />
    </InputGroup>
    <Button type="submit" color="primary">Add Item</Button>
  </form>
);

AddItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddItem;
