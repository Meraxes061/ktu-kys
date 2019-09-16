import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { ROUTES, ROLES } from './constants'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import StudentPage from './components/StudentPage';
import AdminPage from './components/AdminPage'
import Navbar from './components/Navbar';
import Home from './components/Home';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.REGISTER} component={Register} />
          <ProtectedRoute exact path={ROUTES.STUDENT} component={StudentPage} role={ROLES.STUDENT} />
          <ProtectedRoute exact path={ROUTES.ADMIN} component={AdminPage} role={ROLES.ADMIN} />
          <Route path={ROUTES.ALL} component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
