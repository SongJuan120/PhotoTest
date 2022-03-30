import api from './base.service';
import Config from '../../config'

export const photoService = {
    getPhoto
};
function getPhoto(page, cb) {
    api.baseApi(`/api/?key=${Config.API_KEY}&page=${page}&category=background`, 'GET', null, (err, res) => {
        cb(err, res)
    })
}


