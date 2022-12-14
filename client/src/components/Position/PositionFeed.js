import React, { Component } from 'react'
import PositionItem from './PositionItem.js'
import { PropTypes } from 'prop-types'
class PositionFeed extends Component {
    render() {
        const { positions } = this.props
        return positions.map((position) => <PositionItem key={position._id} post={position} />)
    }
}

PositionFeed.propTypes = {
    positions: PropTypes.array.isRequired,
}

export default PositionFeed