import { getImageConstants } from '../constants';
import { photoService } from '../../services/api';

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
        photoService.getPhoto (page, (err, res)=> {      
          if (err) {            
            dispatch(getImgFailure (err))
          } else {            
            dispatch (getImgSuccess (res.hits))            
          }           
      })
    }  
}
