import React from 'react'
import moment from 'moment';

export default ({value, description, gameId, createdAt, userId, id, iScored}) => {
  const timeStamp = moment(createdAt).format("MMM Do YYYY, h:mm:ss a")
  const whoScored = iScored
    ? 'I'
    : userId.username
  const showGame = iScored
    ? `in game ${gameId}`
    : ''

    return (
      <li className="onePost subcard" key={id}>    
        <p className="gameButton">
         {whoScored} scored {value} points for {description} {showGame} at {timeStamp}.
      </p> 
     </li>
    )
}

