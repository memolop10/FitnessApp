import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Exercises}/>
        <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  
  );
}

export default App
