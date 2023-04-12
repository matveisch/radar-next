import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { Formik, Form, FormikHelpers, Field } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../../ui/error-message/ErrorMessage';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

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

const ContactForm = ({ messageText }: Props) => {
  const [isEmail, SetIsEmail] = useState(false);
  // todo: state sentSuccessfully отвечает за статус отправленного письма.
  //  Как только письмо успешно доходит, принимает значение true.
  //  Можешь это протестировать, поменяв api route в функции отправки данных (тоже помечу это)
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

  async function sendEmail(data: Values) {
    try {
      // todo: чтобы протестировать появление ошибки – просто можешь поменять route ниже (/api/send-email)
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
      }
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
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
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            // console.log(JSON.stringify(values, null, 2));
            sendEmail(values);
            setSubmitting(false);
          }, 500);
        }}>
        {({ errors, touched }) => (
          <Form className={styles.contactForm}>
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
            <div className={styles.singleInput} style={{ marginBottom: '148px' }}>
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
            <button className={`${styles.sendButton} paragraph`} type="submit" style={{ marginBottom: '24px' }}>
              {t('send')}
            </button>
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
