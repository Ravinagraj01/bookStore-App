import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import './App.css'
import Courses from './courses/courses'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>  {/* ✅ Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
