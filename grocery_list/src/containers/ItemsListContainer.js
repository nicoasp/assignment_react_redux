import {connect} from "react-redux";
import ItemsList from "../components/ItemsList";
import {purchaseItem} from "../actions";

//Helper function to return correct set of puppies
const getPurchasedItems = (items, purchasedFilter, categoryFilter) => {
  switch (purchasedFilter) {
    case "SHOW_ALL":
      if (categoryFilter === "All") {
        return items;
      } else {
        return items.filter(item => item.category === categoryFilter);
      }
    case "SHOW_PURCHASED":
      if (categoryFilter === "All") {
        return items.filter(item => item.purchased);
      } else {
        return items.filter(
          item => item.purchased && item.category === categoryFilter
        );
      }
    case "SHOW_NOT_PURCHASED":
      if (categoryFilter === "All") {
        return items.filter(item => !item.purchased);
      } else {
        return items.filter(
          item => !item.purchased && item.category === categoryFilter
        );
      }
    default:
      return items;
  }
};

const mapStateToProps = state => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  console.log(getPurchasedItems(
      state.items,
      state.purchasedFilter,
      state.categoryFilter
    ))
  return {
    items: getPurchasedItems(
      state.items,
      state.purchasedFilter,
      state.categoryFilter
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    purchaseItem: id => {
      dispatch(purchaseItem(id));
    }
  };
};

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ItemsList
);

export default ItemListContainer;
