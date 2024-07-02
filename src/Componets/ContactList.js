import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactData, fetchContact } from '../Redux/Action/Action';
import { Button } from '@mui/material';
import Contact from './Contact';
import { toast } from 'react-toastify';

const ContactList = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        dispatch(fetchContact());

    };
    const handleShow = () => setShow(true);

    const [userData, setUserData] = useState(null);
    const [UserId, setUserId] = useState(null);

    const contactListData = useSelector(state => state.contact.contactList);

    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch]);

    const updateForm = async (contact) => {
        console.log('contact=', contact);
        setUserData(contact)
        setUserId(contact._id)
        setShow(true)
    }

    const DeleteForm = async (contact) => {
        console.log('contact=', contact._id);
        dispatch(deleteContactData(contact._id))
        notify(() => dispatch(fetchContact()))
        function notify(cb) {
            toast.success('Contact delete Successfully!', {
                onClose: cb
            })

        }

    }
    return (
        <div>
            <h2>Contact List</h2>
            <Button variant="contained" className='mb-5' onClick={handleShow}>Add data</Button>
            {console.log('contactList=', contactListData.data)}
            <div className='row'>
                {contactListData?.data?.map(contact => (
                    <div className='col-3'>
                        <div class="card">
                            <div class="card-body">
                                <h3>{contact.Name}</h3>
                                <p>Email: {contact.Email}</p>
                                <p>Message: {contact.Message}</p>
                                <Button variant="contained" onClick={() => updateForm(contact)} style={{margin:'40px'}}>Update</Button>
                                <Button variant="contained" onClick={() => DeleteForm(contact)}>Delete</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Contact show={show} handleClose={handleClose} userData={userData} UserId={UserId} />
        </div>
    );
};

export default ContactList;
