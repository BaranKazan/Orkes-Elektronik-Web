import React, { Component } from 'react';
import countryList from 'react-select-country-list'

class Contact extends Component {

   constructor() {
      super();

      this.options = countryList().getData();

      this.state = {
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          phoneNumber: '',
          country: '',
          subject: '',
          message: '',

          validFirstName: null,
          validLastName: null,
          validCompanyName: null,
          validEmail: null,
          validPhoneNumber: null,
          validCountry: null,
          validSubject: null,
          validMessage: null,

          successMessage: false,
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
                  <p className="lead">message</p>
               </div>
            </div>
            <div className="row">
               <div className="eight columns">
                  <form>
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
                           <label htmlFor="contactEmail">E-mail: <span className="required">*</span></label>
                           <input type="text" id="contactEmail" name="contactEmail" onChange={this.changeEmail} />
                        </div>       
                        <div>
                           <label htmlFor="phoneNumber">Phoner Number: <span className="required">*</span></label>
                           <input type="number" id="phoneNumber" name="phoneNumber" onChange={this.changePhoneNumber} />
                        </div> 
                        <div>
                           <label htmlFor="country">Country: <span className="required">*</span></label>
                           <select defaultValue="Select country..." onChange={this.changeCountry}>
                              <option>Select country...</option>
                              {
                                    this.options.map((value, i) => {
                                        return <option value={value.label} key={i}>{value.label}</option>
                                    })
                                }
                           </select>
                        </div> 
                        <div>
                           <label htmlFor="contactSubject">Subject: <span className="required">*</span></label>
                           <input type="text" id="contactSubject" name="contactSubject" onChange={this.changeSubject} />
                        </div>
                        <div>
                           <label htmlFor="message">Message: <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="message" name="message" onChange={this.changeMessage}/>
                        </div>
                        <div>
                           <button className="submit" onClick={this.buttonClicked}>Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>
                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>
            </div>
         </section>
      );
   }

   buttonClicked = (e) => {
      e.preventDefault();
      let pass = true
      if (this.state.validFirstName === null || this.state.validFirstName === false) {
         pass = false
         this.setState({ validFirstName: false })
      }
      if (this.state.validLastName === null || this.state.validLastName === false) {
         pass = false
         this.setState({ validLastName: false })
      }
      if (this.state.validCompanyName === null || this.state.validCompanyName === false) {
         pass = false
         this.setState({ validCompanyName: false })
      }
      if (this.state.validEmail === null || this.state.validEmail === false) {
         pass = false
         this.setState({ validEmail: false })
      }
      if (this.state.validPhoneNumber === null || this.state.validPhoneNumber === false) {
         pass = false
         this.setState({ validPhoneNumber: false })
      }
      if (this.state.validCountry === null || this.state.validCountry === false) {
         pass = false
         this.setState({ validCountry: false })
      }
      if (this.state.validSubject === null || this.state.validSubject === false) {
         pass = false
         this.setState({ validSubject: false })
      }
      if (this.state.validMessage === null || this.state.validMessage === false) {
         pass = false
         this.setState({ validMessage: false })
      }
      if (pass) {
         this.setState({ successMessage: true })
      }
      console.log(this.state)
   }

   changeFirstName = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ firstName: e.target.value, validFirstName: true })
      } else {
         this.setState({ validFirstName: false })
      }
   }

   changeLastName = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ lastName: e.target.value, validLastName: true })
      } else {
         this.setState({ validLastName: false })
      }
   }

   changeCompanyName = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ companyName: e.target.value, validCompanyName: true })
      } else {
         this.setState({ validCompanyName: false })
      }
   }

   changeEmail = (e) => {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (regex.test(e.target.value)) {
         this.setState({ email: e.target.value, validEmail: true });
      } else {
         this.setState({ validEmail: false });
      }
   }

   changePhoneNumber = (e) => {
      const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
      if (regex.test(e.target.value)) {
         this.setState({ phoneNumber: e.target.value, validPhoneNumber: true });
      } else {
         this.setState({ validPhoneNumber: false })
      }
   }

   changeCountry = e => {
      let value = e.target.value
      if (!((value === "Select country...") || (value === ""))) {
         this.setState({ country: value, validCountry: true });
      } else {
         this.setState({ validCountry: false })
      }
   }

   changeSubject = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ subject: e.target.value, validSubject: true })
      } else {
         this.setState({ validSubject: false })
      }
   }

   changeMessage = (e) => {
      if (!(e.target.value === "")) {
         this.setState({ message: e.target.value, validMessage: true })
      } else {
         this.setState({ validMessage: false })
      }
   }

}

export default Contact;
