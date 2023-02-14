import React from 'react'
import AddTask from './helpers/AddTask.js'
import TaskList from './helpers/TaskList.js'
import { TasksProvider } from './helpers/TasksContext.js'

export default function TaskAppAfter() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}
