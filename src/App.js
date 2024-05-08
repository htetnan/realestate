import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/forgotPassword";
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Sign-In" element={<SignIn/>}/>
        <Route path="/Sign-Up" element={<SignUp/>}/>
        <Route path="/Offers" element={<Offers/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
