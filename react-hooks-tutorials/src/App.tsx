import React from 'react'
import UseEffects1 from './components/useEffects/for_DOM_updates/UseEffects1'
import UseEffects2 from './components/useEffects/for_DOM_updates/UseEffects2'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import UseState1 from './components/useState/UseState1'
import UseState2 from './components/useState/UseState2'
import CommonParent from './components/stateManagement/common_parernt_props/CommonParent'
import ReducerTutorial1 from './components/stateManagement/reducer_tutorial/with_reducer/TaskAppAfter'
import ReducerTutorial2 from './components/stateManagement/reducer_tutorial/with_immer_reducer/TaskAppAfter_immer'
import ContextApp from './components/stateManagement/context_tutorial1/ContextApp'
import TaskAppBefore from './components/stateManagement/reducer_tutorial/without_reducer/TaskAppBefore'
import WithEffects from './components/useEffects/for_understanding_rendering/with-useeffects/WithEffects'
import WithoutEffects from './components/useEffects/for_understanding_rendering/without-useeffects/WithoutEffects'
import SyncApp from './components/useEffects/for_synchronization/SyncApp'
import CustomHooks from './components/customHooks/CustomHooks'
import { WagmiProvider } from './components/wagmi/wagmi1/WagmiContext'
import Wagmi1 from './components/wagmi/wagmi1/Wagmi1'
import UseStateWagmiTest3 from './components/useState/UseStateWagmiTest3'

const App = (): JSX.Element => {
  return (
    <WagmiProvider>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/useEffects1" element={<UseEffects1 />}></Route>
        <Route path="/useEffects2" element={<UseEffects2 />}></Route>
        <Route path="/useState1" element={<UseState1 />}></Route>
        <Route path="/useState2" element={<UseState2 />}></Route>
        <Route path="/commonparent" element={<CommonParent />}></Route>
        <Route path="/beforereducer" element={<TaskAppBefore />}></Route>
        <Route path="/afterreducer1" element={<ReducerTutorial1 />}></Route>
        <Route path="/afterreducer2" element={<ReducerTutorial2 />}></Route>
        <Route path="/contextapp1" element={<ContextApp />}></Route>
        <Route path="/withEffects" element={<WithEffects />}></Route>
        <Route path="/withoutEffects" element={<WithoutEffects />}></Route>
        <Route path="/syncEffects" element={<SyncApp />}></Route>
        <Route path="/customhooks" element={<CustomHooks />}></Route>
        <Route path="/wagmi1" element={<Wagmi1 />}></Route>
        <Route path="/wagmiTest1" element={<UseStateWagmiTest3 />}></Route>
      </Routes>
    </WagmiProvider>
  )
}

export default App
