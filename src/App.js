import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './layouts/navigation_bar'
import Note from './components/note'
import LoginForm from './components/login_form'
import { Switch, Route } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  };
  handleChangeEmail(loggedInEmail) {
    return this.setState({ email: loggedInEmail })
  }


  render() {
    return (
      <>
        <NavigationBar email={this.state.email} />
        <Switch>
          <Route path='/login'  > <LoginForm data={this.handleChangeEmail.bind(this)} /></Route>

          <Route path='/notes' component={Note} />
        </Switch>
      </>
    )
  }
}

export default App
