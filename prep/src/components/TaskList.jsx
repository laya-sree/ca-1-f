import React from 'react'
import TaskCard from './TaskCard'

const Services = [
    {
      id:1,
      title:"Web Development",
      desc:"Development of Web Applications"
    },
    {
      id:2,
      title:"App Development",
      desc:"Development of Applications"
    },
    {
      id:3,
      title:"Game Development",
      desc:"Development of Games"
    },
  ]
const TaskList = () => {
  return (
    <div>

        {Services.map((service,i)=>(
            <TaskCard key={i} service={service} />
        ))
        }
      
    </div>
  )
}

export default TaskList
