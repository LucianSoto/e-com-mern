import Nav from './components/Nav'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router >
      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <Nav/>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
      
      </div>
    </Router>
  );
}

export default App;
