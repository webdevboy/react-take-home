import axios from 'axios';

export const BASEURL = 'http://www.omdbapi.com/';

export const api = axios.create({
  baseURL: BASEURL,
  headers: {
    'content-type': 'application/json',
  },
});

async function request({ method = 'get', url, params, data, headers }) {
  const response = await api.request({
    method,
    url,
    params,
    data,
    headers,
  });
  return response.data;
}

export function get(params) {
  return request({
    method: 'get',
    url: '',
    params: {
      ...params,
      apiKey: 'cb151ae2',
    },
  });
}

