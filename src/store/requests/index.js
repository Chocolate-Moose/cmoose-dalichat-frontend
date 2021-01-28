/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { requestTimeout, BACKEND_URL } from '../../utils';

const backendAxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: requestTimeout,
});

export async function createBackendAxiosRequest(config) {
  return backendAxiosInstance(config);
}
