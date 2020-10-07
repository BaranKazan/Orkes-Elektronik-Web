import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <section id="about">
            <div className="row">
               <div className="nine columns main-col">
                  <h2>About Us</h2>
                  <p>Hello!</p>
                  <p>We are the Orkes Elektronik, a team of engineers that are capable of creating circuit boards as well as program those circuit boards. 
                     We are doing integrations tests as well to ensure the product works as intended.</p>
                  <p>We are creating unmanned aerial vehicle (UAV) with auto-pilot functionality and AES 128 bites encryption to ensure it does not get hijacked.</p>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
