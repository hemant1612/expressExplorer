import {getSearchList, updateRsvps, sendAccountRequest} from './client';
import {store} from '../index'

export const changeActionType = () => (
  {type: 'CHANGE_ACTION_TYPE'}
)

const accountRequest = ({username, password, actionType}) => (
  {
    type: 'ACCOUNT_REQUEST',
    username,
    password,
    actionType
  }
)

const accountRequestSuccess = ({userInfo, token, actionType}) => (
  {type: 'ACCOUNT_REQUEST_SUCCESS', userInfo, token, actionType}
)

const accountRequestFailure = ({errMsg, actionType}) =>
({type: 'ACCOUNT_REQUEST_FAILURE', errMsg, actionType})

export const submitAccountRequest = ({username, password, actionType}) => {
  return dispatch => {
    dispatch(accountRequest({username, password, actionType}))
    sendAccountRequest({username, password, actionType}).then(accountResponse => {
      if (accountResponse.error) {
        dispatch(accountRequestFailure({errorMsg: accountResponse.error, actionType}));
      } else {
        let {userInfo, token} = accountResponse;
        userInfo = userInfo || {};
        token = token || '';
        dispatch(accountRequestSuccess({userInfo, token, actionType}));
      }
    })
  }
}

export const toggleRsvp = (id, info) => ({type: 'TOGGLE_RSVP', id, info})

export const toggleAndUpdateRsvp = (id, info) => {
  return dispatch => {
    dispatch(toggleRsvp(id, info));

    let state = store.getState();
    let {username, rsvps} = state.account.userInfo;
    let token = state.account.token;
    updateRsvps(username, token, rsvps);
  }
}

const searchRequest = (city, sortBy) => ({type: 'SEARCH_REQUEST', city, sortBy})
const searchSuccess = searchList => ({type: 'SEARCH_SUCCESS', searchList})
const searchFailure = error => ({type: 'SEARCH_FAILURE', error})
export const fetchSearchList = (city, sortBy) => {
  return dispatch => {
    dispatch(searchRequest(city, sortBy));
    getSearchList(city, sortBy).then(searchResult => {
      if (searchResult.error) {
        dispatch(searchFailure(searchResult.error.description))
      } else {
        dispatch(searchSuccess(searchResult.businesses));
      }
    })
  }
}
