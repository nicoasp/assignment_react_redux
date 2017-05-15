import {connect} from 'react-redux'
import ItemsList from '../components/ItemsList'
import {purchaseItem} from '../actions'

// Helper function to return correct set of puppies
// const getVisiblePuppies = (puppies, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return puppies
//     case 'SHOW_AVAILABLE':
//       return puppies.filter(puppy => puppy.available)
//     case 'SHOW_ADOPTED':
//       return puppies.filter(puppy => !puppy.available)
//     default:
//       return puppies
//   }
// }


const mapStateToProps = (state) => {
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    // puppies: getVisiblePuppies(state.puppies, state.puppyFilters)
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    purchaseItem: (id) => {
      dispatch(purchaseItem(id))
    }
  }
}

const ItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList)

export default ItemListContainer