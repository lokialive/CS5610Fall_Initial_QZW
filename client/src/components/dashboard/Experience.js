import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { deleteExperience } from '../../actions/profileActions'

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id)
  }
  render() {
    const experience = this.props.experience.map((exp) => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          {exp.from} To {exp.to === '' ? 'Until Now' : exp.to}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ))

    return (
      <div>
        <h4 className="mb-4">Professional Experience</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Year</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    )
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience })(Experience)
