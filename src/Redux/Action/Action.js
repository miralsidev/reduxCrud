import axios from 'axios';
import * as actionTypes from './ActionTypes';
import { toast } from 'react-toastify';

export const addContact = (values) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:5000/Contact/addContact`, {
                Name: values.Name,
                Email: values.Email,
                Message: values.Message
            });
            dispatch({ type: actionTypes.ADD_CONTACT_SUCCESS, payload: response });
            // toast.success("Contact added successfully!");
        } catch (error) {
            dispatch({ type: actionTypes.ADD_CONTACT_FAILURE, payload: error.message });
            // toast.error("Failed to add contact. Please try again.");
        }
    };
}

export const addUser = (values) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`http://localhost:5000/api/addUser`, {
                fname: values.fname,
                lname: values.lname,
                email: values.email,
                password: values.password,
            })
            dispatch({ type: actionTypes.ADD_REGISTRATION_SUCCESS, payload: res });
            // dispatch(fetchContact());

        } catch (error) {
            dispatch({ type: actionTypes.ADD_REGISTRATION_FAILURE, payload: error.message })
            toast.error("Failed to REGISTRATION. Please try again.");

        }
    }
}

export const fetchContact = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:5000/Contact/displayContact`);
            dispatch({ type: actionTypes.FETCH_CONTACT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_CONTACT_FAILURE, payload: error.message });
        }
    }
}

export const updateTodoData = (values, id) => {
    console.log('values=', values);
    console.log('id=', id);
    return async (dispatch) => {
        try {
            const response = await axios.put(`http://localhost:5000/Contact/updateContact/${id}`, {
                Name: values.Name,
                Email: values.Email,
                Message: values.Message
            });
            dispatch({ type: actionTypes.UPDATE_CONTACT_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: actionTypes.UPDATE_CONTACT_FAILURE, payload: error.message });
        }
    };
};

export const deleteContactData = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:5000/Contact/deleteContact/${id}`);
            dispatch({ type: actionTypes.DELETE_CONTACT_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: actionTypes.DELETE_CONTACT_FAILURE, payload: error.message });
        }
    };
};
