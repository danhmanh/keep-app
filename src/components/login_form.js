import React, { Component } from 'react'
import { Form, Button, Card, Toast } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
    }
  }


  login = () => {
    // axios
    //   .post('/api/v1/users/login', {
    //     user: {
    //       email: this.state.email,
    //       password: this.state.password,
    //     },
    //   })
    //   .then((response) => {
    //     this.setState({ loggedIn: true })
    //     alert('Login Sucess')
    //     console.log(response.data)
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       if (error.response.status === 401) {
    //         alert('Wrong email or password')
    //       }
    //     }

    //     console.log(error)
    //   })
    console.log('email in log in form', this.state.email)
    this.setState({ loggedIn: true })
    this.props.data(this.state.email);
    console.log(this.props);
    return;
  }

  handleEmailChange = (event) => {

    this.setState({ email: event.target.value })
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? <Redirect to='/notes' /> : null}

        <Card style={{ width: '18rem', align: 'center' }}>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  placeholder='Enter email'
                  onChange={this.handleEmailChange}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>
              <Button variant='primary' onClick={() => this.login()}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
