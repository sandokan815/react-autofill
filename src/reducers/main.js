import _ from 'lodash';
import {
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_ADDRESS,
  UPDATE_POSTCODE,
  UPDATE_CITY,
  UPDATE_COUNTRY,
  UPDATE_TERRITORY,
  UPDATE_EMAIL,
  UPDATE_PHONE
} from '../actions/main'

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  postCode: '',
  city: '',
  country: '',
  territory: '',
  email: '',
  phone: '',
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state)

  switch (action.type) {
    case UPDATE_FIRSTNAME:
      newState.firstName = action.value;
      return newState

    case UPDATE_LASTNAME:
      newState.lastName = action.value;
      return newState

    case UPDATE_ADDRESS:
      newState.address = action.value;
      return newState

    case UPDATE_POSTCODE:
      newState.postCode = action.value;
      return newState

    case UPDATE_CITY:
      newState.city = action.value;
      return newState

    case UPDATE_COUNTRY:
      newState.country = action.value;
      return newState

    case UPDATE_TERRITORY:
      newState.territory = action.value;
      return newState

    case UPDATE_EMAIL:
      newState.email = action.value;
      return newState

    case UPDATE_PHONE:
      newState.phone = action.value;
      return newState

    default:
      return state
  }
};

export default reducer