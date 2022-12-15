import React from 'react'
import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
// import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register.js'
import Dashboard from './components/dashboard/Dashboard.js'
import EditProfile from './components/edit-profile/EditProfile.js'
import AddExperience from './components/add-credentials/AddExperience.js'
import AddEducation from './components/add-credentials/AddEducation.js'
import Profiles from './components/profiles/Profiles.js'
import Profile from './components/profile/Profile.js'
import Posts from './components/posts/Posts.js'
import PrivateRoute from './common/PrivateRoute.js'
import setAuthToken from './utils/setAuthToken.js'
import jwt_decode from 'jwt-decode'
import { setCurrentUser, logoutUser } from './actions/authActions.js'
import './App.css'
import { Provider } from 'react-redux'
import store from './store.js'
import CreateProfile from './components/create-profile/CreateProfile.js'
import Post from './components/post/Post.js'
import CompanyComponent from './components/detail/Company.js'
import SearchComponent from './components/search/index.js'

import HomeComponent from './components/homePage/HomeComponent.js'
import CreateCompanyProfile from './components/create-profile/CreateCompanyProfile.js'
import EditCompanyProfile from './components/edit-profile/EditCompanyProfile.js'
import AddWork from './components/create-profile/AddWork.js'
import AnonyProfile from './components/Anonymous/AnonyProfile.js'
import AnonyHome from './components/Anonymous/AnonyHome.js'
import LoginHome from './components/Home/LoginHome.js'
import AdminCompanies from './components/Admin/AdminCompanies.js'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)

  // decode token
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))

  // chekc if the token is expired; If expired, jump to the login page.
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/anony/home" component={AnonyHome} />

              {/*12.6- new component*/}
              <Route path="/companies/*" component={CompanyComponent} />
              <Route exact path="/search" component={SearchComponent} />
              <Route
                exact
                path="/company/HomePage/:handle"
                component={HomeComponent}
              />

              <Route
                exact
                path="/profile/loading"
                redirect="/profile/:handle"
              />
              <Route exact path="/profile/:handle" component={Profile} />
              <Route
                exact
                path="/profile/anony/:handle"
                component={AnonyProfile}
              />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/home" component={LoginHome} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/admin-companies"
                  component={AdminCompanies}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-company-profile"
                  component={CreateCompanyProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-company-profile"
                  component={EditCompanyProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/add-work" component={AddWork} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
            </div>
            {/* <Footer /> */}
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
