import React, { Component } from 'react'

export class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Page not found</strong> 
            </div>
      </div>
    )
  }
}

export default NotFoundPage
