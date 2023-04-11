import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setNewValue} from "../store/slices/visitor.slice"

const Home = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const go = () => {
    if (value === "") {
      alert("Debes digitar un nombre");
    } else {
      newVisitor();
      navigate("/pokedex");
    }
  };
  const newVisitor = () => {
    dispatch(setNewValue(value))
  }
  return (
    <div className="Home-Container">
      <img src="./ImagenPokedex.jpg" alt="" />
      <h1>Bienvenido entrenador</h1>
        <label htmlFor="trainer">
        <h3>Escribe tu nombre para iniciar:</h3>
        </label>
        <input
          id="trainer"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={go}>Enviar</button>
    </div>
  );
};

export default Home;