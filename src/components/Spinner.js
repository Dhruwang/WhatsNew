import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  }
}
