import React from 'react'
import AddTask from './components/AddTask.js'
import TaskList from './components/TaskList.js'
import { TasksProvider } from './components/TasksContext.js'

// immers are helpful when state is an array.
export default function TaskAppAfter() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}
