import s from './ContactForm.module.css';
import React from 'react';
import {Formik, Field, Form } from 'formik';
import {useId} from "react";

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
return (
    <div className={s.formWrapper}>
    <Formik initialValues={initialValues}
    
    onSubmit={handleSubmit}
  >
  <Form className={s.form}>
  <label className={s.label} htmlFor={NameFieldId}>Name</label>
  <Field className={s.field} id={NameFieldId} name="Name" placeholder="Anna"/>
  <label className={s.label} htmlFor={NumberFieldId}>Number</label>
  <Field className={s.field} id={NumberFieldId} name="Number" placeholder="720-35-78"/>
  <button className={s.button} type="submit">Add contact</button>
  </Form>
</Formik>
    </div>
)
}

export default ContactForm;