import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import PositionItem from './PositionItem'

import positions from './PositionInfo.json'

import { findPositionsThunk } from './Position-thunks'

const PositionList = () => {
  //const {positions, loading} = useSelector(state => state.positionData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findPositionsThunk())
  }, [])

  return (
    <ul className="list-group">
      {positions.map((position) => (
        <PositionItem key={position._id} post={position} />
      ))}
    </ul>
  )
}
export default PositionList
