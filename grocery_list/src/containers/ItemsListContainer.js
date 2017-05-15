import {connect} from "react-redux";
import ItemsList from "../components/ItemsList";
import {purchaseItem} from "../actions";

//Helper function to return correct set of puppies
const getPurchasedItems = (items, purchasedFilter, categoriesFilter) => {
  switch (purchasedFilter) {
    case "SHOW_ALL":
      return items.filter(item => {
        if (categoriesFilter === "SHOW_ALL") {
          return items;
        } else {
          return items.filter(item => item.category === categoriesFilter);
        }
      });
    case "SHOW_PURCHASED":
      if (categoriesFilter === "SHOW_ALL") {
        return items.filter(item => item.purchased);
      } else {
        return items.filter(
          item => item.purchased && item.category === categoriesFilter
        );
      }
    case "SHOW_NOT_PURCHASED":
      if (categoriesFilter === "SHOW_ALL") {
        return items.filter(item => !item.purchased);
      } else {
        return items.filter(
          item => !item.purchased && item.category === categoriesFilter
        );
      }
    default:
      return items;
  }
};

const mapStateToProps = state => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
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
