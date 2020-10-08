import React, { Component } from 'react';
import countryList from 'react-select-country-list';
import emailjs from 'emailjs-com';

class Contact extends Component {

   constructor() {
      super();

      this.options = countryList().getData();

      this.state = {
         eventTarget: null,

         validFirstName: null,
         validLastName: null,
         validCompanyName: null,
         validEmail: null,
         validPhoneNumber: null,
         validCountry: null,
         validSubject: null,
         validMessage: null,

         successMessage: false,
         failedMessage: false
      }
   }

   render() {
      return (
         <section id="contact">
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Contact us</span></h1>
               </div>
               <div className="ten columns">
                  <p className="lead">Do you have some questions, please make sure to contact us then.</p>
               </div>
            </div>
            <div className="row">
               <div className="eight columns">
                  <form onSubmit={this.buttonClicked}>
                     {this.state.successMessage &&
                        <div className="alert success">
                           <span className="closebtn" onClick={() => {this.setState({successMessage:false})}}>&times;</span>
                           <strong>Message Recived!</strong> <p>Thank you for submiting your message, we will reply soon as possible.</p>
                     </div>
                     }
                     {this.state.failedMessage &&
                        <div className="alert">
                           <span className="closebtn" onClick={() => { this.setState({ failedMessage: false }) }}>&times;</span>
                           <strong>Something went wrong.</strong>
                           <p>Please check your message or contact us with our email address.</p>
                     </div>
                     }
                     <fieldset>
                        <div>
                           <label htmlFor="firstName">First Name: <span className="required">*</span></label>
                           <input type="text" id="firstName" name="firstName" onChange={this.changeFirstName} />
                        </div>
                        <div>
                           <label htmlFor="lastName">Last Name: <span className="required">*</span></label>
                           <input type="text" id="lastName" name="lastName" onChange={this.changeLastName} />
                        </div>
                        <div>
                           <label htmlFor="companyName">Company Name: <span className="required">*</span></label>
                           <input type="text" id="companyName" name="companyName" onChange={this.changeCompanyName} />
                        </div>
                        <div>
                           <label htmlFor="email">E-mail: <span className="required">*</span></label>
                           <input type="text" id="email" name="email" onChange={this.changeEmail} />
                        </div>
                        <div>
                           <label htmlFor="phoneNumber">Phoner Number: <span className="required">*</span></label>
                           <input type="number" id="phoneNumber" name="phoneNumber" onChange={this.changePhoneNumber} />
                        </div>
                        <div>
                           <label htmlFor="country">Country: <span className="required">*</span></label>
                           <select defaultValue="Select country..." id="country" name="country" onChange={this.changeCountry}>
                              <option>Select country...</option>
                              {
                                 this.options.map((value, i) => {
                                    return <option value={value.label} key={i}>{value.label}</option>
                                 })
                              }
                           </select>
                        </div>
                        <div>
                           <label htmlFor="subject">Subject: <span className="required">*</span></label>
                           <input type="text" id="subject" name="subject" onChange={this.changeSubject} />
                        </div>
                        <div>
                           <label htmlFor="message">Message: <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="message" name="message" onChange={this.changeMessage} />
                        </div>
                        <div>
                           <button className="submit">Submit</button>
                        </div>
                     </fieldset>
                  </form>
               </div>
            </div>
         </section>
      );
   }

   buttonClicked = (e) => {
      e.preventDefault()
      let promise = new Promise((resolve, rejected) => {
         let pass = true
         if (this.state.validFirstName === null || this.state.validFirstName === false) {
            pass = false
            this.setState({ validFirstName: false })
            document.getElementById("firstName").style.border = "2px groove red";
         }
         if (this.state.validLastName === null || this.state.validLastName === false) {
            pass = false
            this.setState({ validLastName: false })
            document.getElementById("lastName").style.border = "2px groove red";
         }
         if (this.state.validCompanyName === null || this.state.validCompanyName === false) {
            pass = false
            this.setState({ validCompanyName: false })
            document.getElementById("companyName").style.border = "2px groove red";
         }
         if (this.state.validEmail === null || this.state.validEmail === false) {
            pass = false
            this.setState({ validEmail: false })
            document.getElementById("email").style.border = "2px groove red";
         }
         if (this.state.validPhoneNumber === null || this.state.validPhoneNumber === false) {
            pass = false
            this.setState({ validPhoneNumber: false })
            document.getElementById("phoneNumber").style.border = "2px groove red";
         }
         if (this.state.validCountry === null || this.state.validCountry === false) {
            pass = false
            this.setState({ validCountry: false })
            document.getElementById("country").style.border = "2px groove red";
         }
         if (this.state.validSubject === null || this.state.validSubject === false) {
            pass = false
            this.setState({ validSubject: false })
            document.getElementById("subject").style.border = "2px groove red";
         }
         if (this.state.validMessage === null || this.state.validMessage === false) {
            pass = false
            this.setState({ validMessage: false })
            document.getElementById("message").style.border = "2px groove red";
         }
         if (pass) {
            this.setState({ eventTarget: e.target })
            resolve('Passed')
         } else {
            rejected('Failed')
         }
      });

      promise.then((message) => {
         console.log(message);
         this.sendEmail()
      }).catch((message) => {
         console.log(message);
      })
   }

   sendEmail = () => {
      emailjs.sendForm('service_bvf8f8s', 'template_ev8sehc', this.state.eventTarget, 'user_tiZidkGI3U0Mv4FPxXAlO')
         .then((result) => {
            console.log(result.text);
            this.setState({successMessage:true})
         }, (error) => {
            console.log(error.text);
            this.setState({failedMessage:true})
         });
   }

   changeFirstName = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ validFirstName: true })
         document.getElementById("firstName").style.border = "2px groove green";
      } else {
         this.setState({ validFirstName: false })
         document.getElementById("firstName").style.border = "2px groove red";
      }
   }

   changeLastName = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ validLastName: true })
         document.getElementById("lastName").style.border = "2px groove green";
      } else {
         this.setState({ validLastName: false })
         document.getElementById("lastName").style.border = "2px groove red";
      }
   }

   changeCompanyName = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ validCompanyName: true })
         document.getElementById("companyName").style.border = "2px groove green";

      } else {
         this.setState({ validCompanyName: false })
         document.getElementById("companyName").style.border = "2px groove red";
      }
   }

   changeEmail = (e) => {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (regex.test(e.target.value)) {
         this.setState({ validEmail: true });
         document.getElementById("email").style.border = "2px groove green";
      } else {
         this.setState({ validEmail: false });
         document.getElementById("email").style.border = "2px groove red";
      }
   }

   changePhoneNumber = (e) => {
      const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
      if (regex.test(e.target.value)) {
         this.setState({ validPhoneNumber: true });
         document.getElementById("phoneNumber").style.border = "2px groove green";
      } else {
         this.setState({ validPhoneNumber: false })
         document.getElementById("phoneNumber").style.border = "2px groove red";
      }
   }

   changeCountry = e => {
      let value = e.target.value
      if (!((value === "Select country...") || (value === ""))) {
         this.setState({ validCountry: true });
         document.getElementById("country").style.border = "2px groove green";
      } else {
         this.setState({ validCountry: false })
         document.getElementById("country").style.border = "2px groove red";
      }
   }

   changeSubject = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ validSubject: true })
         document.getElementById("subject").style.border = "2px groove green";
      } else {
         this.setState({ validSubject: false })
         document.getElementById("subject").style.border = "2px groove red";
      }
   }

   changeMessage = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ validMessage: true })
         document.getElementById("message").style.border = "2px groove green";
      } else {
         this.setState({ validMessage: false })
         document.getElementById("message").style.border = "2px groove red";
      }
   }

}

export default Contact;
