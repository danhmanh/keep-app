import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export default class NavigationBar extends Component {
  render(props) {
    console.log('prop in navigation bar', props);
    return (
      <div>
        <Navbar>
          <Navbar.Brand href='#home'>Google Kept</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              Signed in as: <a href='#login'>{this.props.email}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <hr></hr>
      </div>
    )
  }
}
