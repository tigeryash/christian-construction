import React from "react";
import ContactForm from "./contact-form";
import SectionContainer from "../section-container";
import ContactContent from "./contact-content";

const Contact = () => {
  return (
    <SectionContainer id="contact" className="grid lg:grid-cols-2">
      <ContactContent />

      <ContactForm />
    </SectionContainer>
  );
};

export default Contact;
