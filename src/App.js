// import React from "react";
// import { Users } from "./users/Users";

// function App() {
//   const [data, setData] = React.useState(null)
//   const [toggle, setToggle] = React.useState(false)
//   const [value, setValue] = React.useState('')

//   const handleClick = () => {
//     setToggle((prev) => !prev)
//   }
  
//   React.useEffect(() => {
//     let t = setTimeout(() => setData({name: 'alex'}), 1000)
//     return () => clearTimeout(t)
//   }, [])

//   return (
//     <div className="App">
//       {data && <div style={{background: 'red', color: 'black'}}>data</div>}
//       {toggle && <div data-testid="toggleElem">toggle true</div>}
//       <h1>Hello world</h1>
//       <h1 data-testid="valueElem">{value}</h1>
//       <button onClick={handleClick} data-testid="toggleBtn">click</button>
//       <input type="text" placeholder="type ur username..." value={value} onChange={(e) => setValue(e.target.value)}/>
//       <Users />
//     </div>
//   );
// }

// export default App;

import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { MainPage } from './pages/MainPage'

export const App = () => {
  return (
    <BrowserRouter>
    <Link to={'/'} data-testid="main-link">about</Link>
    <Link to={'about'} data-testid="about-link">main</Link>
      <Routes>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

