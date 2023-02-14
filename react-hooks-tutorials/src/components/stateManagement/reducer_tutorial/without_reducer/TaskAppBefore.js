import React, { useState } from 'react'
import AddTask from './AddTask.js'
import TaskList from './TaskList.js'

export default function TaskAppBefore() {
  const [tasks, setTasks] = useState(initialTasks)

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text,
        done: false
      }
    ])
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task
        } else {
          return t
        }
      })
    )
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId))
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      {/* this is just a reference, this will be used by the button by its "children component" which will add new tasks to the tasks list */}
      <AddTask onAddTask={handleAddTask} />

      {/* this is the recursive list of all Tasks in the state variable "tasks" */}
      <TaskList
        tasks={tasks}
        // this is just a reference, this will be used by the button by its children component, it does not call the function, dont go by the term "onChangeTask" it is different from "onChange" of HTML input element.
        onChangeTask={handleChangeTask}
        // this is just a reference, this will be used by the button by its children component, it does not call the function.
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
]
