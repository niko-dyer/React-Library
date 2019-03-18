import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import Navbar from './components/Navbar'
import Game from './pages/Game'
import Flashcards from './pages/FlashApp'
import './App.css'
import { Container } from 'semantic-ui-react'

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/game' component={Game} />
        <Route exact path='/flash' component={Flashcards} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;
