import React, {PropTypes} from "react";
import PurchaseButton from "./PurchaseButton";

// Custom card component for each item's data
const ItemCard = ({item, onPurchaseClick}) => {
  const {name, description, amount, category, purchased} = item;

  // Using Bootstrap 4 card classes
  return (
    <div className="ItemCard card" style={{maxWidth: "320px"}}>
      <div className="card-block">
        <h4>{name}</h4>
        <p>{description}</p>
        <p>Amount: {amount}</p>
        <p>Category: {category}</p>
        <PurchaseButton
          purchased={purchased}
          onPurchaseClick={onPurchaseClick}
        />
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  Item: PropTypes.object.isRequired,
  onPurchaseClick: PropTypes.func.isRequired
};

export default ItemCard;
