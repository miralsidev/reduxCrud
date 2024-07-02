import { Button, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addContact, updateTodoData } from '../Redux/Action/Action'
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

const Contact = ({ show, handleClose, userData, UserId }) => {
    console.log('userData=', userData);
    const dispatch = useDispatch();

    // const hasFormSubmit = (values, { resetForm }) => {
    //     console.log('values = ', values);
    //     dispatch(addContact(values));

    //     toast.success('Contact added successfully!', {
    //         onClose: () => {
    //             handleClose();
    //             resetForm();
    //         }
    //     });

    // }
    const handleFormSubmit = (values, { resetForm }) => {
        if (UserId) {
            dispatch(updateTodoData(values, UserId));
            toast.success('Contact updated successfully!', {
                onClose: () => {
                    handleClose();
                    resetForm();
                }
            });
        } else {
            dispatch(addContact(values));
            toast.success('Contact added successfully!', {
                onClose: () => {
                    handleClose();
                    resetForm();
                }
            });
        }
    };
    return (
        <>
            <div className='continer'>
                <ToastContainer />
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik onSubmit={handleFormSubmit} initialValues={{
                        Name: userData?.Name || '',
                        Email: userData?.Email || '',
                        Message: userData?.Message || ''
                    }}>
                        <Form>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Field name='Name' as={TextField} label='Name'></Field>
                                <Field name='Email' as={TextField} label='Email'></Field>
                                <Field name='Message' as={TextField} multiline rows={4} label='Message'></Field>
                                <Button variant="contained" type='submit'>
                                    submit
                                </Button>
                            </div>

                        </Form>
                    </Formik>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default Contact
