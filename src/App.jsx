import { useState } from 'react'
import Layout from './Layout'
import { Route, Router, Routes } from 'react-router-dom'
import './index.css'
import PostContext from './Helper/Contex'


function App() {


  return (
    <PostContext>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </PostContext>
  )
}

export default App
