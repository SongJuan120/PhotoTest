import Config from '../../config';
const axios = require('axios');

export default {
    async baseApi(sub_url, method, json_data, cb) {
        const token = localStorage.token? localStorage.token : null;
        try {
          let request = {
            method,
            url: Config.SERVICE_API_URL + sub_url,
            // headers: {
            //   "Accept": "application/json",
            //   "Content-Type": "application/json",
            //   "Authorization": token
            //     ? "Bearer " + token
            //     : null,
            // },
            data: JSON.stringify(json_data)
          };

          axios(request)
          .then(  (response) => {
              cb(null, response.data)
            }, (error) => { cb(error); }
          );
        } catch (error) {
          cb(error);
        }
    }
}
