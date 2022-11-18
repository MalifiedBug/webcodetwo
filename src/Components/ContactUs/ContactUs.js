import * as React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup';


const murl = "https://632464475c1b435727a76571.mockapi.io/rentalcontactus"

export function ContactUs() {
  return (
    <div className='contactus'>
           
      <h2>Contact Us</h2>
      <Formik

       initialValues={{ firstName: '', lastName: '', email: '', message: '' }}

       validationSchema={Yup.object({

         firstName: Yup.string()

           .max(15, 'Must be 15 characters or less')

           .required('Required'),

         lastName: Yup.string()

           .max(20, 'Must be 20 characters or less')

           .required('Required'),

         email: Yup.string().email('Invalid email address').required('Required'),

         message: Yup.string()

           .min(20, 'Must be 20 characters or more')

           .required('Required')

       })}

       onSubmit={(values, { setSubmitting }) => {

        fetch(murl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
               },
            body: JSON.stringify(values)
            })
            .then(()=>console.log("data sent"))

         setTimeout(() => {

           alert(JSON.stringify(values, null, 2));

           setSubmitting(false);

           window.location.reload()

         }, 400);

       }}

     >

       <Form className="contactusform">

         <label htmlFor="firstName">First Name</label>

         <Field name="firstName" type="text" />

         <ErrorMessage name="firstName" />

 

         <label htmlFor="lastName">Last Name</label>

         <Field name="lastName" type="text" />

         <ErrorMessage name="lastName" />

 

         <label htmlFor="email">Email Address</label>

         <Field name="email" type="email" />
Message
         <ErrorMessage name="email" />

         <label htmlFor="message"></label>

         <Field name="message" type="message" />

          <ErrorMessage name="message" />

 

         <button type="submit">Submit</button>

       </Form>

     </Formik>
     <div className='contactusfooter'>
      <h3>Location: Bengaluru</h3>
      <h4>Email: support@rental.in</h4>
      <p>Working Hours: 24/7</p>
     </div>
    </div>
  );
}
