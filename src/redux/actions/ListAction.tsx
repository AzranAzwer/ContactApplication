import { ADD_CONTACT } from "../types";

/**
 * POST - add contact to the list
 * @function addContact
 * @param {Object} data - contact data
 */
export const addContact = (data: object) => async (dispatch: any) => {
    dispatch({
        type: ADD_CONTACT,
        payload: data,
    });
};