import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import PrivetRoute from './Pages/PrivateRoute/PrivateRoute'
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='/home' 
          element={
          <PrivetRoute>
          <Home></Home>
          </PrivetRoute>}>
      </Route>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
    </div>
  );
}

export default App;
