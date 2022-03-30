import { getImageConstants } from '../constants';
import { photoService } from '../../services/api';

const getImg = (data) => ({
  type: getImageConstants.GET_IMAGES,
  payload: data,
});

const getImgSuccess = (data) => ({
  type: getImageConstants.GET_IMAGES_SUCCESS,
  payload: data,
});

const getImgFailure = (error) => ({
  type: getImageConstants.GET_IMAGES_FAILURE,
  payload: error,
});

export const getImageActions = (page) => {
    return (dispatch) => {      
        dispatch(getImg (true))
        photoService.getPhoto (page, (err, res)=> {  
          dispatch(getImg (false))    
          if (err) {            
            dispatch(getImgFailure (err))
          } else {            
            dispatch (getImgSuccess (res.hits))            
          }           
      })
    }  
}
