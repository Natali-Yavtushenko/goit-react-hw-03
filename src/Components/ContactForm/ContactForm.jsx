import s from './ContactForm.module.css';
import React from 'react';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import {useId} from "react";
import * as Yup from 'yup';

const initialValues={
    Name: '',
    Number: '',
  };


const  ContactForm = ({ addContact }) => {
   const NameFieldId = useId();
   const NumberFieldId = useId();

   const handleSubmit = (values, actions,) => {
    console.log(values);
    
    addContact({
        id: Date.now().toString(),
        name: values.Name,
        number: values.Number,
       });
       actions.resetForm();
   };

   const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ]+$/;
   const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(20, 'Максимум 20 символів')
      .matches(onlyLetters, 'Це поле може містити тільки літери')
      .required("Це поле обов'язкове!"),
      number: Yup.number()
      .min(7, 'Мінімум 7 символів')
      .max(13, 'Максимуму 13 символів')
      .positive(),
  });
    
  

return (
    <div className={s.formWrapper}>
    <Formik initialValues={initialValues}
    validationSchema={registerSchema}
    onSubmit={handleSubmit}
  >
     {({ errors, touched }) => (
  <Form className={s.form}>
  <label className={s.label} htmlFor={NameFieldId}>Name</label>
  <Field className={s.field} id={NameFieldId} name="Name" placeholder="Anna"/>
  {errors.name && touched.name ? (
    <div>{errors.name}</div>
     ) : null}
     <ErrorMessage name="name" />
  <label className={s.label} htmlFor={NumberFieldId}>Number</label>
  <Field className={s.field} id={NumberFieldId} name="Number" placeholder="720-35-78"/>
  {errors.email && touched.email ? (
     <div>{errors.email}</div>
    ) : null}
    <ErrorMessage name="email" />
  <button className={s.button} type="submit">Add contact</button>
  </Form>
       )}
     </Formik>
   </div>
);
}

export default ContactForm;