import { getImageConstants } from '../constants';
import initialState from './initialState';

const imageReducer = (state = initialState.loadImage, action) => {
  switch (action.type) {    
    case getImageConstants.GET_IMAGES:
      return {
        ...state,
        loggedIn: true,
      };
    case getImageConstants.GET_IMAGES_SUCCESS:      
      return {
        ...state,
        loggedIn: false,
        data: action.payload
      };
    case getImageConstants.GET_IMAGES_FAILURE:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default imageReducer;