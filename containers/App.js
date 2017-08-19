import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import ContactForm from '../components/ContactForm'
import SubmitValidationForm from '../components/SubmitValidationForm'
import actions from '../actions/formAction'
import { SubmissionError } from 'redux-form'

class App extends Component {

   submit({firstName='',lastName='',email=''}) {
     let error = {};
     let isError = false;

      if(firstName.trim() === '') {
            error.firstName = 'Required';
            isError = true;
      }

      if ( firstName.length > 20 ) {
          error.firstName = 'Too long';
          isError = true;
      }

      if(lastName.trim() === '') {
            error.lastName = 'Required';
            isError = true;
      }

      if(email.trim() === '') {
            error.email = 'Required';
            isError = true;
      }

      if (isError) {
        throw new SubmissionError(error);
      }
  }

  render() {
    let inlineStyle = {color:'blue'}
    return (
        <div className="_app">
          <h1 style={inlineStyle}> Redux Form Submission</h1>
          {/*<ContactForm onSubmit={this.submit} />*/}
          <SubmitValidationForm />
        </div>

      )
  }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
