import axios from 'axios';
import actionTypes from '../actions/actionTypes';
import API from './api';


/**
 * @param {Object} book - book
 * @returns {Object} - Object containing action type and user
 */
export const editBookAction = book => ({
  type: actionTypes.EDIT_BOOK,
  book,
});


/**
 * het book Detail
 * @param  {Integer} id book Id
 * @param  {Object} data book data with with to update database
 * @return {any}    dispatches an action to the redux store
 */
export const editBook = (id, data) => dispatch => (
  axios.put(`${API}/books/${id}`, data)
    .then((response) => {
      Materialize.toast(response.data.message, 2500, 'teal darken-4');
    }, (error) => {
      Materialize.toast(error.response.data.message, 2500, 'red darken-4');
    })
    .catch((error) => {
      Materialize.toast(error, 2500, 'red darken-4');
    })
);


/**
 * @param {Object} book - book
 * @returns {Object} - Object containing action type and user
 */
export const addBookAction = book => ({
  type: actionTypes.ADD_BOOK,
  book,
});


/**
 * add new book to database
 * @param  {Object} data book data
 * @return {any}    dispatches an action to the redux store
 */
export const addBook = data => dispatch => (
  axios.post(`${API}/books`, data)
    .then((response) => {
      Materialize.toast(response.data.message, 2500, 'teal darken-4');
    }, (error) => {
      Materialize.toast(error.response.data.message, 2500, 'red darken-4');
    })
    .catch((error) => {
      Materialize.toast(error, 2500, 'red darken-4');
    })
);


/**
 * @param {String} category - book
 * @returns {Object} - Object containing action type and user
 */
export const addBookCategoryAction = category => ({
  type: actionTypes.ADD_BOOK_CATEGORY,
  category,
});

/**
 * het book Detail
 * @param  {Object} category new book category
 * @return {any}    dispatches an action to the redux store
 */
export const addBookCategory = category => dispatch => (
  axios.post(`${API}/books`, category)
    .then((response) => {
      Materialize.toast(response.data.message, 2500, 'teal darken-4');
      dispatch(addBookCategoryAction(category));
    }, (error) => {
      Materialize.toast(error.response.data.message, 2500, ' darken-4');
    })
    .catch((error) => {
      Materialize.toast(error, 2500, ' darken-4');
    })
);