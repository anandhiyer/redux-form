import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import ContactForm from '../components/ContactForm'
import actions from '../actions/formAction'

class App extends Component {

  render() {
    let inlineStyle = {color:'blue'}
    return (
        <div className="_app">
          <h1 style={inlineStyle}> Redux Form</h1>
          <ContactForm/>
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
