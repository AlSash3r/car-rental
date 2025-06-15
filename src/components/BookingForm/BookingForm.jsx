import { Formik, Form, Field, ErrorMessage } from 'formik';
import { bookingSchema } from '../../validation/bookingForm';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import toast from 'react-hot-toast';

import s from './BookingForm.module.css';

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, actions) => {
    setIsSubmitting(true);
    try {
      toast.loading('Sending...', { id: 'booking' });

      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Form submitted successfully!', { id: 'booking' });
      actions.resetForm();
    } catch (error) {
      toast.error(error?.message || 'Network Error!', { id: 'booking' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={s.formWrapper}>
      <h2 className={s.formHeading}>Book your car now</h2>
      <p className={s.formSubtitle}>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={{ name: '', email: '', date: null, comment: '' }}
        validationSchema={bookingSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={s.formBox}>
            <div className={s.formGroup}>
              <Field name="name" placeholder="Name*" className={s.formInput} />
              <ErrorMessage name="name" component="div" className={s.formError} />
            </div>

            <div className={s.formGroup}>
              <Field name="email" type="email" placeholder="Email*" className={s.formInput} />
              <ErrorMessage name="email" component="div" className={s.formError} />
            </div>

            <div className={s.formGroup}>
              <DatePicker
                selected={values.date}
                onChange={val => setFieldValue('date', val)}
                placeholderText="Booking date*"
                className={s.formInput}
              />
              <ErrorMessage name="date" component="div" className={s.formError} />
            </div>

            <div className={s.formGroup}>
              <Field
                name="comment"
                as="textarea"
                placeholder="Comment"
                className={`${s.formInput} ${s.formTextarea}`}
              />
              <ErrorMessage name="comment" component="div" className={s.formError} />
            </div>

            <button className={s.formButton} type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
