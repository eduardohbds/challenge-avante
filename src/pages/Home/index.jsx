import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import * as C from "./style";
import Button from "../../components/Button";
const Home = () => {
  const {signout} = useAuth();
  const navigate = useNavigate();
  return (
    <C.Container>
      <C.Title>
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
          Sair
        </Button>
      </C.Title>
    </C.Container>
  )
}

export default Home