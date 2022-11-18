import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { getCurrentProfile, deleteAccout } from '../../actions/profileActions'
import Spinner from '../../common/Spinner'
import ProfileActives from './ProfileActives'
import Experience from './Experience'
import Education from './Education'

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }

  onDeleteClick(e) {
    this.props.deleteAccout()
  }

  render() {
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile
    let dashboardContent

    // check id prfofile is null or loading is true
    if (profile === null || loading) {
      dashboardContent = <Spinner />
    } else {
      //check if ther is profile data exist
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>

            <ProfileActives />

            {/* Education and Experience */}
            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            {/* Delete current account button */}
            <div style={{ marginBottom: '60px' }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete Current Account
            </button>
          </div>
        )
      } else {
        //After logging in, if there is no detail info
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome, {user.name}!</p>
            <p>There is no detail information, please add more!</p>
            <Link className="btn btn-lg btn-info" to="/create-profile">
              Create My Profile
            </Link>
          </div>
        )
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccout })(
  Dashboard,
)
