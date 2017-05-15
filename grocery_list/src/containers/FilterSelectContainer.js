import {connect} from "react-redux";
import FilterSelect from "../components/FilterSelect";
import {setCategoriesFilter} from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: e => {
      // Don't reload the page
      e.preventDefault();
      console.log(e.target.value);
      // Pass in the filter for that link to set it in the store
      dispatch(setCategoriesFilter(e.target.value));
    }
  };
};

const FilterSelectContainer = connect(mapDispatchToProps)(FilterSelect);

export default FilterSelectContainer;
