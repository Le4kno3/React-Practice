/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react'
import { useImmerReducer } from 'use-immer'

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export function TasksProvider({ children }) {
  // now we dont use useReducer, instead we useImmerReducer
  // this will give additional features to tasksReducer function shown below.
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks)

  return (
    // here the tasks is from useReducer()
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

// due to useImmerReducer(), we can dont need to return the state,
// we simply need to update the draft, and the useImmerReduer,
// will automatically set its value as new state.
function tasksReducer(draft, action) {
  switch (action.type) {
    case 'added': {
      draft.push({
        id: action.id,
        text: action.text,
        done: false
      })
      break
    }
    case 'changed': {
      const index = draft.findIndex((t) => t.id === action.task.id)
      draft[index] = action.task
      break
    }
    case 'deleted': {
      console.log(draft)
      return draft.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
]
