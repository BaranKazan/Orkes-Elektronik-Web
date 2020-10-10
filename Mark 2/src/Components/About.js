import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <section id="about">
            <div className="row">
               <div className="nine columns main-col">
                  <h2>About Us</h2>
                  <p>Orkes Elektronik is a family company that has experienced IT engineers and electronic technicians from Sweden. 
                     We are developing software and producing circuit boards according to the customer's needs. 
                     We are doing integrations tests as well to ensure the product works as intended.</p>
                  <p>We are cooperating with various companies in the world to build our system with their technique. 
                     We are specialists in building drones with different functionalities that can satisfy customer's requirements. 
                     We are constructing different security alternatives for our product.</p>
                  <p>It is enough to send a request for the desired technique to us. 
                     You can also send suggestions to us to design and show you what we can do for your company. 
                     Orkes Elektronik can deliver to construction, security company, fire department, forestry, agriculture, TV company, airport, oil pipeline security company, and government.</p>
               </div>
            </div>
            <div className="row">
               <div id="gallery" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                     <div className="carousel-item active">
                        <img src="images/code.jpg" alt="Coding" />
                     </div>
                     <div className="carousel-item">
                        <img src="images/circuit2.jpeg" alt="Circuit board" />
                     </div>
                     <div className="carousel-item">
                        <img src="images/hologram.jpg" alt="Holo"/>
                     </div>
                     <div className="carousel-item">
                        <img src="images/circuit.jpg" alt="Circuit board" />
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#gallery" data-slide="prev">
                     <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a className="carousel-control-next" href="#gallery" data-slide="next">
                     <span className="carousel-control-next-icon"></span>
                  </a>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
