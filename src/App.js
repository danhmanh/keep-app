import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './layouts/navigation_bar'
import Note from './components/note'
import LoginForm from './components/login_form'
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <NavigationBar />

      <Switch>
        <Route path='/login' component={LoginForm} />
        <Route path='/notes' component={Note} />
      </Switch>
    </>
  )
}

export default App
