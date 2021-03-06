import ActionTypes, { requestStates, setBearerToken } from '../helpers';
import createAsyncActionCreator from '.';

import * as authRequests from '../requests/authRequests';

/**
 * Sign up a user and return a user object and a bearer token
 * @param {*} email
 * @param {*} password
 * @param {*} firstName
 * @param {*} lastName
 */
export function signUpUser(email, username, password, firstName, lastName, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.AUTH_USER,
    authRequests.signUpUserRequest(email, username, password, firstName, lastName),
    {
      successCallback: (response) => { if (response.data.token) { setBearerToken(response.data.token); } },
      responseSubfield: 'user',
      ...additionalConfig,
    },
  );
}

/**
 * A function that takes a username and a password and sends them to the backend server for authentication
 * If authentication succeeds, the provided token will be placed locally and the user's authentication status will be updated
 * @param {*} identifier - Email OR username, either will be accepted by the server
 * @param {*} password
 */
export function signInUser(username, password, additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.AUTH_USER,
    authRequests.signInUserRequest(username, password),
    {
      successCallback: (response) => { if (response.data.token) { setBearerToken(response.data.token); } },
      responseSubfield: 'user',
      ...additionalConfig,
    },
  );
}

/**
 * A function that clears a user's authentication status
 */
export function signOutUser() {
  return (dispatch) => {
    localStorage.clear();

    // Run any additional deauth processes here (dispatch DEAUTH_USER_REQUEST if async)
    dispatch({ type: `${ActionTypes.DEAUTH_USER}_${requestStates.SUCCESS}` });
  };
}

export function validateUserToken(additionalConfig = {}) {
  return (dispatch) => createAsyncActionCreator(
    dispatch, ActionTypes.AUTH_USER,
    authRequests.validateUserTokenRequest(),
    {
      responseSubfield: 'user',
      failureCallback: () => dispatch(signOutUser()),
      ...additionalConfig,
    },
  );
}
