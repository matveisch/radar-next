import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import { Formik, Form, FormikHelpers, Field } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../ui/error-message/ErrorMessage";

export interface Values {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const phoneRegex = /^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/;

const ContactForm = () => {
  const [isEmail, SetIsEmail] = useState(false);

  let validationShape = {
    name: Yup.string().required("Required"),
    phone: Yup.string().matches(
      phoneRegex,
      "Must match format 05[x][-][0-9]{7}"
    ),
    email: Yup.string().email("Invalid email"),
    message: Yup.string().max(150, "Message is too long"),
  };

  if (isEmail) {
    validationShape.email = Yup.string()
      .email("Invalid email")
      .required("Field is required");
  } else {
    validationShape.phone = Yup.string()
      .matches(phoneRegex, "Must match format 05[x][-][0-9]{7}")
      .required("Field is required");
  }

  const contactSchema = Yup.object().shape(validationShape);

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          message: "",
        }}
        validationSchema={contactSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.contactForm}>
            <div
              className={styles.singleInput}
              style={{ marginBottom: "31px" }}
            >
              <Field
                className={`${styles.contactInput} paragraph`}
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                touched={touched.name}
                errors={errors.name}
              />
              {errors.name && touched.name ? (
                <ErrorMessage error={errors.name} />
              ) : null}
            </div>
            {isEmail ? (
              <div
                className={styles.singleInput}
                style={{ marginBottom: "6px" }}
              >
                <Field
                  className={`${styles.contactInput} paragraph`}
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  touched={touched.email}
                  errors={errors.email}
                />
                {errors.email && touched.email ? (
                  <ErrorMessage error={errors.email} />
                ) : null}
              </div>
            ) : (
              <div
                className={styles.singleInput}
                style={{ marginBottom: "6px" }}
              >
                <Field
                  className={`${styles.contactInput} paragraph`}
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  touched={touched.phone}
                  errors={errors.phone}
                />
                {errors.phone && touched.phone ? (
                  <ErrorMessage error={errors.phone} />
                ) : null}
              </div>
            )}
            <div className={styles.buttonContainer}>
              <button
                className={`link ${styles.emailButton}`}
                style={{ marginBottom: "29px" }}
                onClick={(e) => {
                  e.preventDefault();
                  SetIsEmail(!isEmail);
                }}
              >
                Prefer {isEmail ? "phone" : "email"} response
              </button>
            </div>
            <div
              className={styles.singleInput}
              style={{ marginBottom: "148px" }}
            >
              <Field
                className={`${styles.contactInput} paragraph`}
                id="message"
                name="message"
                placeholder="Message"
                as={"textarea"}
                touched={touched.message}
                errors={errors.message}
              />
              {errors.message && touched.message ? (
                <ErrorMessage error={errors.message} />
              ) : null}
            </div>
            <button
              className={`${styles.sendButton} paragraph`}
              type="submit"
              style={{ marginBottom: "24px" }}
            >
              Send message
            </button>
            <div className={styles.buttonContainer}>
              <p className={`light-paragraph ${styles.contactWithin}`}>
                We will contact you within 24 hours
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
