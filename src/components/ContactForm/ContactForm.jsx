import s from './ContactForm.module.css';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const initialValues = {
  Name: '',
  Number: '',
};

const ContactForm = ({ addContact }) => {
  const NameFieldId = useId();
  const NumberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    addContact({
      id: Date.now().toString(),
      name: values.Name,
      number: values.Number,
    });
    actions.resetForm();
  };

  
  const registerSchema = Yup.object().shape({
    Name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(20, 'Максимум 20 символів')
      .matches(/^[A-Za-zА-Яа-яЄєІіЇїҐґ]+$/, 'Це поле може містити тільки літери')
      .required("Це поле обов'язкове!"),
    Number: Yup.string()
    .min(7, 'Мінімум 7 символів')
    .max(13, 'Максимуму 13 символів')
      .required("Це поле обов'язкове!"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <label className={s.label} htmlFor={NameFieldId}>
              Name
            </label>
            <Field
              className={s.field}
              id={NameFieldId}
              name="Name"
              placeholder="Anna"
            />
            {errors.Name && touched.Name ? <div>{errors.Name}</div> : null}
            <ErrorMessage name="Name" component="div" />

            <label className={s.label} htmlFor={NumberFieldId}>
              Number
            </label>
            <Field
              className={s.field}
              id={NumberFieldId}
              name="Number"
              placeholder="7203578"
              type="tel"
              inputMode="numeric"
              pattern="\d*"
            />
            {errors.Number && touched.Number ? <div>{errors.Number}</div> : null}
            <ErrorMessage name="Number" component="div" />

            <button className={s.button} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
