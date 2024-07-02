import { Button, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/Action/Action'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Reg = () => {
    const dispatch = useDispatch();
    const hasFormSubmit = (values, { resetForm }) => {
        console.log('values = ', values);
        dispatch(addUser(values));
        resetForm(); 
    }
    return (
        <>
        <div className='continer'>
        <Formik onSubmit={hasFormSubmit} initialValues={{
                fname: '',
                lname: '',
                email: '',
                password:''
            }}>
                <Form>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Field name='fname' as={TextField} label='fname'></Field>
                        <Field name='lname' as={TextField} label='lname'></Field>

                        <Field name='email' as={TextField} label='email'></Field>
                        <Field name='password' as={TextField} multiline rows={4} label='password'></Field>
                        <Button variant="contained" type='submit'>
                            Disable elevation
                        </Button>
                    </div>

                </Form>
            </Formik>
            <ToastContainer />
        </div>
        
        </>
    )
}

export default Reg
