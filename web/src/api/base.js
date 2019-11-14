import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

let config = {
   authToken: ''
};

export const getAPIConfig = () => ({ ...config });

export const updateAPIConfig = newConfig => {
   config = {
      ...config,
      ...newConfig
   };
};

export const callAPI = (endpoint, method = 'get', data) => {
   return new Promise((resolve, reject) => {
      axios({
         method,
         headers: {
            Authorization: `Bearer ${getAPIConfig().authToken}`
         },
         url: `${BASE_URL}${endpoint}`,
         data
      })
         .then(res => resolve(res.data))
         .catch(err => {
            reject({
               status: (err.response && err.response.status) || '',
               message: err.message || ''
            });
         });
   });
};
