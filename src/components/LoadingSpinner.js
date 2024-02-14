import React, { Component } from 'react'
import loading from './loading.gif'
import './loadingspinnerstyles.css'

export default class LoadingSpinner extends Component {
  render() {
    return (
      <div className='center-spinner'>
        <img src={loading} alt='loading'/>
      </div>
    )
  }
}
