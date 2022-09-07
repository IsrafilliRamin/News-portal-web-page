import React from 'react'
import { Routes, Route } from 'react-router-dom';
import All from './All';
import Buisness from './Buisness';
/* import Entertainment from './Entertainment';
import Sciense from './Sciense';
import Sports from './Sports';
import Technology from './Technology';
import World from './World'; */
import Error from './Error';
import Details from './Details';
const Pages = () => {
  return (

    <Routes>
      <Route path='/' element={<All />} />
      <Route path='/:cateqory' element={<Buisness />} />
     {/*    <Route path='sports' element={<Sports/>} />
                <Route path='world' element={<World/>} />
                <Route path='technology' element={<Technology/>} />
                <Route path='entertainment' element={<Entertainment/>} />
                <Route path='sciense' element={<Sciense/>} /> */}
      <Route path='/details/:name' element={<Details />} />
      <Route path='*' element={<Error />} />


    </Routes>

  )
}

export default Pages