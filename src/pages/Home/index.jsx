import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import * as C from "./style";
const Home = () => {
  const {signout} = useAuth();
  const navigate = useNavigate();
  return (
    <C.Container>
      <C.Title>
        
      </C.Title>
    </C.Container>
  )
}

export default Home