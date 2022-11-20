import React from "react";
import CircleContact from "../../components/circle-contact/CircleContact";
import ContactForm from "../../components/contact-form/ContactForm";
import styles from "./index.module.scss";

const Contact = () => {
  return (
    <div id={styles.contactPage}>
      <CircleContact />
      <ContactForm />
    </div>
  );
};

export default Contact;
