import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import ForgotPW from './pages/ForgotPW'
import PasswordReset from './pages/PasswordReset'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <Router >
      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <Nav/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/log_in" element={<LogIn />} />
            <Route path="/register" element={<Register />} />

            <Route path="forgot_password" element={<ForgotPW />} />
            <Route path="update_password/:id/:token" element={<PasswordReset />} />
            <Route path="page_not_found" element={<PageNotFound />} />
          </Routes>  
      </div>
    </Router>
  );
}

export default App;
