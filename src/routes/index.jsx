
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/SignIn";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";

const Private = ({Item}) => {
  const {signed} = useAuth();

  return signed > 0 ? <Item/> : <Signin/>;
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Private Item={Home} />} />
        <Route path="/" element={Home}/>
        <Route path="*" element={Signin}/>
        <Route exact path="/signup" element={Signup}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;