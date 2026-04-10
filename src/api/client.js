const BASE_URL = 'http://bvritcloud.com/api';
const STUDENT_ID = '23WH1A0553';

const apiCall = (method, endpoint, data = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-student-id': STUDENT_ID,
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(`${BASE_URL}${endpoint}`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      return res.json();
    })
    .catch(err => {
      console.error('API call failed:', err);
      throw err;
    });
};

export const get = (endpoint) => apiCall('GET', endpoint);
export const post = (endpoint, data) => apiCall('POST', endpoint, data);
export const put = (endpoint, data) => apiCall('PUT', endpoint, data);
export const remove = (endpoint) => apiCall('DELETE', endpoint);

