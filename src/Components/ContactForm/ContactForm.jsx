import s from './ContactForm.module.css'
import React from 'react';
import {Formik, Field, Form } from 'formik'




const  ContactForm = () => {
return (
    <div className={s.formWrapper}>
    <Formik
    initialValues={{
      Name: '',
      Number: '',
    }}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }}
  >
  <Form className={s.form}>
  <label className={s.label} htmlFor="Name">Name</label>
  <Field className={s.field} id="Name" name="Name" placeholder="Anna"/>
  <label className={s.label} htmlFor="Number">Number</label>
  <Field className={s.field} id="Number" name="Number" placeholder="720-35-78"/>
  <button className={s.button} type="submit">Add contact</button>
  </Form>
</Formik>
    </div>
)
}

export default ContactForm;