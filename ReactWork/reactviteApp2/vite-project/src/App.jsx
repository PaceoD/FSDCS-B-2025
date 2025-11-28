import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'
import MainLayout from './pages/MainLayout'
import { useState } from 'react'

function App() {
  const [data,setData]=useState();
  
  

  return (
    <div>
      {/* <h2>Welcome to ReactVite.</h2> */}

       {/* {/<Gallery/> }
       {/<StateHandling />/} */}
       {/* <ImageManipulation/> */}

       <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login logData={data}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/registration" element={<Registration regData={setData}/>}></Route>
        <Route path="/" element={<MainLayout/>}></Route>
       </Routes>
       </BrowserRouter>

       <h2>
        {JSON.stringify(data)}
       </h2>

  
    </div>
  )
}

export default App