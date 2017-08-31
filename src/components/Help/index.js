import React from 'react';

import SingleModuleButton from '../Buttons/SingleModuleButton/index';

const Help = () => {
   return (
      <div className="col-xs-12">
         <h1 className="text-center">Do you need help?</h1>

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus quasi natus consectetur illum perferendis commodi neque molestiae recusandae.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus quasi natus consectetur illum perferendis commodi neque molestiae recusandae.</p>

         <h2>Contact us</h2>

         <div className="row">
            <div className="col-sm-6">
               <form>
                  <div className="form-group">
                     <label htmlFor="name">Your name</label>
                     <input type="text" id="name" className="form-control" placeholder="Your name..." />
                  </div>

                  <div className="form-group">
                     <label htmlFor="email">Your email</label>
                     <input type="email" id="email" className="form-control" placeholder="Your email..." />
                  </div>

                  <div className="form-group">
                     <label htmlFor="subject">Subject</label>

                     <select id="subject" className="form-control">
                        <option>Subject 1</option>
                        <option>Subject 2</option>
                        <option>Subject 3</option>
                     </select>
                  </div>

                  <SingleModuleButton text="Send message" type="submit" />
               </form>
            </div>
         </div>

      </div>
   );
}
 
export default Help;
