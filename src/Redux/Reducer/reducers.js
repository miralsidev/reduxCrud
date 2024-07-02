import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    RegistrationList: [],
    contactList: [],
    error: null,
};
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CONTACT_SUCCESS:
            return {
                ...state,
                contactList: [...state.contactList, action.payload]
            };

        case actionTypes.ADD_CONTACT_FAILURE:
            return { ...state, error: action.payload };

        case actionTypes.ADD_REGISTRATION_SUCCESS:
            return {
                ...state,
                RegistrationList: [...state.RegistrationList, action.payload]
            };
        case actionTypes.ADD_REGISTRATION_FAILURE:
            return { ...state, error: action.payload };

        case actionTypes.FETCH_CONTACT_SUCCESS:
            return { ...state, contactList: action.payload, error: null };

        case actionTypes.FETCH_CONTACT_FAILURE:
            return { ...state, error: action.payload };

        case actionTypes.UPDATE_CONTACT_SUCCESS:
            return {
                ...state,
                contactList: state.contactList.map(contactList =>
                    contactList._id === action.payload._id ? action.payload : contactList
                )
            };
            case actionTypes.DELETE_CONTACT_SUCCESS :
                const updatedContact = state.contactList.filter(contact => contact._id !== action.payload);
    
                return {
                    ...state,
                    contactList: updatedContact
                };    
                case actionTypes.DELETE_CONTACT_FAILURE:
                    return state;    
        default:
            return state;
    }
}
export default contactReducer 
