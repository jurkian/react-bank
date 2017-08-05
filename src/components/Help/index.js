import React from 'react';
 
const Help = () => {
   return (
      <div className="container">
         <h1>Help</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae temporibus quasi natus consectetur illum perferendis commodi neque molestiae recusandae.</p>

         <section>
            <form>
               <p>
                  <label htmlFor="name">Your name</label>
                  <input id="name" type="name" name="name" placeholder="Your name..." />
               </p>
               <p>
                  <label htmlFor="email">Your email</label>
                  <input id="email" type="email" name="email" placeholder="Your email..." />
               </p>
               <p>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject">
                     <option>Subject 1</option>
                     <option>Subject 2</option>
                     <option>Subject 3</option>
                  </select>
               </p>

               <p>
                  <button>Send message</button>
               </p>
            </form>
         </section>
      </div>
   );
}
 
export default Help;
