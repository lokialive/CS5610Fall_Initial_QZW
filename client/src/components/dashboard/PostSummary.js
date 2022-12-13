import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { getPosts } from '../../actions/postActions'
import { Link } from 'react-router-dom'
import './index.css'

class PostSummary extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    console.log(this.props)
    const { posts } = this.props.posts
    const userId = this.props.auth.user.id
    console.log(userId)
    let postItems = posts
      .filter((post) => post.user == userId)
      .map((post, index) => (
        <tr key={index}>
          <td>
            {' '}
            <Link to={`/post/${post._id}`} className="no-deco">
              {index + 1}.
            </Link>
          </td>
          <td>
            <Link to={`/post/${post._id}`} className="no-deco">
              {post.text}
            </Link>
          </td>
          <td>
            <Link to={`/post/${post._id}`} className="no-deco">
              {post.likes.length}
            </Link>
          </td>
          <td>
            <Link to={`/post/${post._id}`} className="no-deco">
              {post.comments.length}
            </Link>
          </td>
        </tr>
      ))

    return (
      <div>
        <h4 className="mb-4">Post Created</h4>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Content</th>
              <th>Liked</th>
              <th>Comments</th>
              <th />
            </tr>
            {postItems}
          </thead>
        </table>
      </div>
    )
  }
}

PostSummary.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  posts: state.post,
  auth: state.auth,
})
export default connect(mapStateToProps, { getPosts })(PostSummary)
