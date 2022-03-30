import { getImageConstants } from '../constants';
import initialState from './initialState';

const imageReducer = (state = initialState.loadImage, action) => {
  switch (action.type) {    
    case getImageConstants.GET_IMAGES:
      return {
        ...state,
        isLoading: action.payload,
      };
    case getImageConstants.GET_IMAGES_SUCCESS:            
      let tempArray = state.data
      tempArray = [...state.data, ...action.payload]
      return {
        ...state,     
        isLoading: false,   
        data: tempArray
      };
    case getImageConstants.GET_IMAGES_FAILURE:
      return {
        ...state,        
        isLoading: false,   
        err: action.payload
      };
    default:
      return state;
  }
};

export default imageReducer;