import React, {PropTypes} from "react";
import ItemCard from "./ItemCard";
// import Filters from './Filters'

const ItemList = ({items, purchaseItem}) => {
  // Generate the puppy card for each puppy
  const itemList = items.map(item => (
    <ItemCard
      item={item}
      key={item.id}
      onPurchaseClick={() => purchaseItem(item.id)}
    />
  ));
  const noItems = <p className="text-muted">Oops no items...</p>;

  return (
    <div className="ItemList container">
      <h1>Our Items</h1>
      <Filters />
      <div className="card-deck">
        {items.length > 0 ? itemList : noItems}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  // addItem: PropTypes.func.isRequired
};

export default ItemList;
