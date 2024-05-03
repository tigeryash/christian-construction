import React from "react";
import ContactForm from "./contact-form";
import SectionContainer from "../section-container";

const Contact = () => {
  return (
    <SectionContainer id="contact" className="grid md:grid-cols-2">
      <div className="flex flex-col mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12">
          Contact us
        </h2>
        <p className="text-xl leading-loose md:pr-8 xl:pr-40">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
          perspiciatis ab consequatur facere illum accusamus itaque? Iure
          doloribus velit harum quam et! Nisi, ab ratione. Vero ut commodi
          debitis facere?
        </p>
      </div>

      <ContactForm />
    </SectionContainer>
  );
};

export default Contact;
