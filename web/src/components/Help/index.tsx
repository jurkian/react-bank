import React from 'react';
import ContactForm from './Form';

const Help: React.FC = () => (
   <div className="row panel-content">
      <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
         <section className="module help">
            <h1>Do you need help?</h1>

            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus quasi
               natus consectetur illum perferendis commodi neque molestiae recusandae.
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus quasi
               natus consectetur illum perferendis commodi neque molestiae recusandae.
            </p>

            <h2>Contact us</h2>

            <ContactForm />
         </section>
      </div>
   </div>
);

export default Help;
