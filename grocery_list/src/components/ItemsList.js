import React, {PropTypes} from "react";
import ItemCard from "./ItemCard";
// import Filters from './Filters'

const ItemList = ({items}) => {
  // Generate the puppy card for each puppy
  const puppyList = items.map(item => (
    <ItemCard
      name={item.name}
      description={item.description}
      amount={item.amount}
      category={item.category}
      purchased={item.purchased}
      onPurchaseClick={() => addItem(item.id)} //made avail by our connect to redux?
    />
  ));
  const noItems = <p className="text-muted">Oops no items...</p>;

  return (
    <div className="ItemList container">
      <h1>Our Items</h1>
      {/* <Filters /> */}
      <div className="card-deck">
        {items.length > 0 ? itemList : noitems}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired
};

export default ItemList;
