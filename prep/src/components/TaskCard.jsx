import React from 'react'

const TaskCard = ({service}) => {
  return (
    <div>
      <h1>{service.title}</h1>
      <h2>{service.desc}</h2>
    </div>
  )
}

export default TaskCard
