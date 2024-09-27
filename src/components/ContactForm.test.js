import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';


test('renders without errors', ()=>{
  render(<ContactForm/>)
});

test('renders the contact form header', ()=> {
  render(<ContactForm/>);
  const headerInput = screen.getByText(/contact form/i);
  expect(headerInput).toBeInTheDocument();
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
  render(<ContactForm/>);
  const fNameInput = screen.findByLabelText(/First Name*/i);
  const fNameError = screen.findByTestId("errorFN")
  userEvent.type(fNameInput, "abcd");
  fNameError.then((element) => {
    expect(element).toBeVisible;
  })
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
  const fNameInput = screen.getByLabelText(/First Name*/i);
  const lNameInput = screen.getByLabelText(/Last Name*/i);
  const emailInput = screen.getByLabelText(/Email*/i);

  userEvent.type(fNameInput,"");
  userEvent.type(lNameInput,"");
  userEvent.type(emailInput,"");


});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
  render(<ContactForm/>);
  const lNameInput = screen.findByLabelText(/Last Name*/i);
  const submitButton = screen.findByTestId("submitButton");
  
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});