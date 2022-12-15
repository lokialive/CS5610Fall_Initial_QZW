import React, { useEffect } from 'react'
import axios from 'axios'
import FollowerItem from './FollowerItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFollowerListThunk } from '../search/search-thunks'
// import { getFollowers } from './follower-thunks'

const FollowerList = () => {
  const { company } = useSelector((state) => state.company)
  console.log('a')
  let companyId = company.orb_num
  console.log(companyId)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(companyId)
    dispatch(fetchFollowerListThunk(companyId))
  }, [companyId])

  const state = useSelector((state) => state)
  console.log(state)
  const { followers } = useSelector((state) => state.followers)
  console.log(followers)
  return (
    <ul className="list-group">
      {followers &&
        followers.map((follower) => (
          <FollowerItem key={follower._id} follower={follower} />
        ))}
    </ul>
  )
}
export default FollowerList
