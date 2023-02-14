import React from 'react'
import UseEffects1 from './components/useEffects/UseEffects1'
import UseEffects2 from './components/useEffects/UseEffects2'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import UseState1 from './components/useState/UseState1'
import UseState2 from './components/useState/UseState2'
import CommonParent from './components/stateManagement/common_parernt_props/CommonParent'
import ReducerTutorial from './components/stateManagement/reducer_tutorial/with_reducer/TaskAppAfter'
import ContextApp from './components/stateManagement/context_tutorial1/ContextApp'
import TaskAppBefore from './components/stateManagement/reducer_tutorial/without_reducer/TaskAppBefore'

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/home" element={<Homepage />}></Route>
      <Route path="/useEffects1" element={<UseEffects1 />}></Route>
      <Route path="/useEffects2" element={<UseEffects2 />}></Route>
      <Route path="/useState1" element={<UseState1 />}></Route>
      <Route path="/useState2" element={<UseState2 />}></Route>
      <Route path="/commonparent" element={<CommonParent />}></Route>
      <Route path="/afterreducer" element={<ReducerTutorial />}></Route>
      <Route path="/beforereducer" element={<TaskAppBefore />}></Route>
      <Route path="/contextapp1" element={<ContextApp />}></Route>
    </Routes>
  )
}

export default App
