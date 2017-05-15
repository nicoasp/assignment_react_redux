////////////////////////////////
//Console logging from Redux assignment
///////////////////////////////
let store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
  console.log("new state: ", store.getState());
});

// Before we start, take a look at the state
console.log("initial state", store.getState());

store.dispatch(
  addItem({
    name: "cheese",
    description: "beautiful parmesan",
    amount: 10,
    category: "dairey"
  })
);

store.dispatch(
  addItem({
    name: "chocolate",
    description: "beautiful but not parmesan",
    amount: 3,
    category: "sweets"
  })
);

store.dispatch(purchaseItem(1));

store.dispatch(setPurchasedFilter("SHOW_PURCHASED"));

store.dispatch(setCategoryFilter("SHOW_SWEETS"));

store.dispatch(setSortBy("DESCRIPTION"));

unsubscribe();
////////////////////////////////
//Console logging from Redux assignment
///////////////////////////////