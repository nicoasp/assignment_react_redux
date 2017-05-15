import {connect} from "react-redux";
import FilterSelect from "../components/FilterSelect";
import {setCategoryFilter} from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: e => {
      // Don't reload the page
      e.preventDefault();
      // Pass in the filter for that link to set it in the store
      dispatch(setCategoryFilter(e.target.value));
    }
  };
};

const FilterSelectContainer = connect(null, mapDispatchToProps)(FilterSelect);

export default FilterSelectContainer;
