import React from "react";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 py-28 ">
      <div className="flex flex-col mb-20">
        <h2 className="text-4xl font-extrabold mb-12">Contact us</h2>
        <p className="text-lg leading-relaxed md:pr-8 xl:pr-40">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
          perspiciatis ab consequatur facere illum accusamus itaque? Iure
          doloribus velit harum quam et! Nisi, ab ratione. Vero ut commodi
          debitis facere?
        </p>
      </div>

      <ContactForm />
    </section>
  );
};

export default Contact;
