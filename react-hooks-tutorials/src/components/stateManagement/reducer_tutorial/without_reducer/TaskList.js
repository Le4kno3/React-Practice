/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React, { useState } from 'react'

// component 1
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    // this logic will store 3 list (3 bullets) in DOM, what will be stored inside each list element will be
    // defined in "Task" component
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  )
}

// child component of component 1
function Task({ task, onChange, onDelete }) {
  // to set screen when user want to edit the task.
  const [isEditing, setIsEditing] = useState(false)
  let taskContent
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value
            })
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <label>
      <input
        type="checkbox"
        // this "checked" is "only" to show default check box,
        // but when page refreshed state is back to initial state
        // this can be useful if state are stored centrally. But right now initial state will only show
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked
            // here the done is just a local variable, it has no effect outsite this screen
          })
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  )
}
