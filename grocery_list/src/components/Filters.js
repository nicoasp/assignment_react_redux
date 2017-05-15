import React from "react";
import FilterLinkContainer from "../containers/FilterLinkContainer";
import FilterSelectContainer from "../containers/FilterSelectContainer";

const categories = ["All", "Dairy", "Sweets", "Meat", "Food"]

const Filters = () => (
  <div className="Filters">
    <FilterLinkContainer filter="SHOW_ALL">
      Show all
    </FilterLinkContainer>
    {", "}
    <FilterLinkContainer filter="SHOW_PURCHASED">
      Show purchased
    </FilterLinkContainer>
    {", "}
    <FilterLinkContainer filter="SHOW_NOT_PURCHASED">
      Show not purchased
    </FilterLinkContainer>
    <FilterSelectContainer categories={categories} />
  </div>
);

export default Filters;
