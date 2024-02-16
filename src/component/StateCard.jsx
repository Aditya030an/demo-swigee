import React from 'react'

const StateCard = ({name}) => {
  return (
    <div className="text-2xl font-medium p-3 text-left shadow-md rounded-md">
        <h1>Location:- {name}</h1>
    </div>
  )
}

export default StateCard;
