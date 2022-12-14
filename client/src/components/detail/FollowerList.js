import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import FollowerItem from './FollowerItem'

// import { getFollowers } from './follower-thunks'

const FollowerList = (props) => {
  //const {positions, loading} = useSelector(state => state.positionData)
  const companyId = props.companyId
  // const dispatch = useDispatch()
  const { followers, setFollowers } = useState([])

  const getFollowers = async () => {
    const { data } = await axios.get(`/follow/${companyId}`)
    const followers = data
    setFollowers(followers)
  }

  useEffect(() => {
    getFollowers()
  }, [])

  return (
    <ul className="list-group">
      {followers &&
        followers.map((follower) => (
          <FollowerItem key={follower._id} post={follower} />
        ))}
    </ul>
  )
}
export default FollowerList
