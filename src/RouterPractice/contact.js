import React from 'react';
import Heading from './Heading';

export const ContactPage = () => {

  const [contact, setContact] = React.useState("");

  const handleChange =(value) => {
    setContact(value);


    return 
  }

  return (
    <>
    <Heading />
    <br />
    <h1> {contact}</h1>
   <input
   type='text'
   placeholder='Enter Mobile No.'
   onChange={(e)=> {handleChange(e.target.value)}}
   />


    
    </>
  )
}
