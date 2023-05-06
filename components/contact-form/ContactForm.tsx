import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { Formik, Form, FormikHelpers, Field, FormikState } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../../ui/error-message/ErrorMessage';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
export interface Values {
  name: string;
  phone: string;
  email: string;
  message: string;
}
interface Props {
  messageText?: string | undefined | string[];
}
const phoneRegex = /^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/;
const topLidVariants = {
  open: {
    top: '-50%',
    boxShadow: 'inset 0px 10px 15px 7px rgba(35, 41, 50, 0.5)',
  },
  close: {
    top: '0%',
    boxShadow: 'inset 0px 10px 15px 7px rgba(35, 41, 50, 0.0)',
  },
};
const bottomLidVariants = {
  open: {
    bottom: '-50%',
    boxShadow: 'inset 0px -10px 15px 7px rgba(35, 41, 50, 0.5)',
  },
  close: {
    bottom: '0%',
    boxShadow: 'inset 0px -10px 15px 7px rgba(35, 41, 50, 0.0)',
  },
};
const checkmarkVariants = {
  hidden: {
    strokeDashoffset: -23,
  },
  visible: {
    strokeDashoffset: 0,
    transition: {
      ease: 'easeOut',
      delay: 0.7,
      duration: 0.5,
    },
  },
};
const ContactForm = ({ messageText }: Props) => {
  const [isEmail, SetIsEmail] = useState(false);
  const [sentSuccessfully, setSentSuccessfully] = useState<boolean | undefined>(undefined);
  const { t } = useTranslation('contact');
  const { locale } = useRouter();

  let validationShape = {
    name: Yup.string().required(t('required') || 'Required'),
    phone: Yup.string().matches(phoneRegex, t('phoneMustMatch') || 'Must match format 05[x][-][0-9]{7}'),
    email: Yup.string().email(t('invalidEmail') || 'Invalid email'),
    message: Yup.string().max(150, t('messageTooLong') || 'Message is too long'),
  };

  if (isEmail) {
    validationShape.email = Yup.string()
      .email(t('invalidEmail') || 'Invalid email')
      .required(t('fieldRequired') || 'Field is required');
  } else {
    validationShape.phone = Yup.string()
      .matches(phoneRegex, t('phoneMustMatch') || 'Must match format 05[x][-][0-9]{7}')
      .required(t('fieldRequired') || 'Field is required');
  }

  const contactSchema = Yup.object().shape(validationShape);

  async function sendEmail(data: Values, resetForm: (nextState?: Partial<FormikState<Values>> | undefined) => void) {
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(data, null, 2),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        setSentSuccessfully(false);
      } else {
        setSentSuccessfully(true);
        resetForm();
      }
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  }

  function handleSubmit(values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) {
    if (!sentSuccessfully) {
      console.log(JSON.stringify(values, null, 2));
      sendEmail(values, resetForm);
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          message: messageText?.toString() || '',
        }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className={styles.contactForm}>
            <div id={styles.lidWrapper}>
              <motion.div
                id={styles.topLid}
                animate={sentSuccessfully ? 'closed' : 'open'}
                transition={{
                  default: { ease: 'easeOut', duration: 0.3, delay: sentSuccessfully ? 0 : 0.7 },
                  boxShadow: { delay: sentSuccessfully ? 0.5 : 0, duration: 0.5 },
                }}
                variants={topLidVariants}></motion.div>
              <motion.div
                id={styles.bottomLid}
                animate={sentSuccessfully ? 'closed' : 'open'}
                transition={{
                  default: { ease: 'easeOut', duration: 0.3, delay: sentSuccessfully ? 0 : 0.7 },
                  boxShadow: { delay: sentSuccessfully ? 0.5 : 0, duration: 0.5 },
                }}
                variants={bottomLidVariants}></motion.div>

              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                enableBackground="new 0 0 24 24"
                id="Layer_1"
                version="1.0"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                className={styles.svg}
                initial="hidden"
                animate={sentSuccessfully ? 'visible' : 'hidden'}>
                <motion.polyline
                  className={styles.path}
                  fill="none"
                  points="20,6 9,17 4,12"
                  stroke="#69fe8b"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  variants={checkmarkVariants}
                />
              </motion.svg>

              <div className={styles.singleInput} style={{ marginBottom: '31px' }}>
                <Field
                  className={`${styles.contactInput} paragraph`}
                  id="name"
                  name="name"
                  placeholder={t('name')}
                  type="text"
                  touched={touched.name?.toString()}
                  errors={errors.name}
                />
                {errors.name && touched.name ? <ErrorMessage error={errors.name} /> : null}
              </div>
              {isEmail ? (
                <div className={styles.singleInput} style={{ marginBottom: '6px' }}>
                  <Field
                    className={`${styles.contactInput} paragraph`}
                    id="email"
                    name="email"
                    placeholder={t('email')}
                    type="email"
                    touched={touched.email?.toString()}
                    errors={errors.email}
                  />
                  {errors.email && touched.email ? <ErrorMessage error={errors.email} /> : null}
                </div>
              ) : (
                <div className={styles.singleInput} style={{ marginBottom: '6px' }}>
                  <Field
                    className={`${styles.contactInput} paragraph`}
                    id="phone"
                    name="phone"
                    placeholder={t('phone')}
                    touched={touched.phone?.toString()}
                    errors={errors.phone}
                  />
                  {errors.phone && touched.phone ? <ErrorMessage error={errors.phone} /> : null}
                </div>
              )}

              <div className={styles.buttonContainer} style={locale === 'he' ? { justifyContent: 'unset' } : undefined}>
                <button
                  className={`link ${styles.emailButton}`}
                  style={{ marginBottom: '29px' }}
                  onClick={e => {
                    e.preventDefault();
                    SetIsEmail(!isEmail);
                  }}>
                  {t('prefer')} {isEmail ? t('phone').toLowerCase() : t('email').toLowerCase()} {t('response')}
                </button>
              </div>
              <div className={styles.singleInput}>
                <Field
                  className={`${styles.contactInput} paragraph`}
                  id="message"
                  name="message"
                  placeholder={t('message')}
                  as={'textarea'}
                  touched={touched.message?.toString()}
                  errors={errors.message}
                />
                {errors.message && touched.message ? <ErrorMessage error={errors.message} /> : null}
              </div>
            </div>
            <motion.button
              className={`${styles.sendButton} paragraph`}
              type={'submit'}
              onClick={() => {
                if (sentSuccessfully) {
                  setSentSuccessfully(false);
                }
              }}>
              {sentSuccessfully ? t('sendAgain') : t('send')}
            </motion.button>
            <div className={styles.buttonContainer} style={locale === 'he' ? { justifyContent: 'unset' } : undefined}>
              <p className={`light-paragraph ${styles.contactWithin}`}>{t('weWillContactYou')}</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
