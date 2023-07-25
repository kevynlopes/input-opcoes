import { useState } from "react";

const App = () => {
  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];
  const [cores, setCores] = useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cores) => (
        <label key={cores}>
          <input
            type="checkbox"
            value={cores}
            checked={handleChecked(cores)}
            onChange={handleChange}
          />
          {cores}
        </label>
      ))}
      <p>{cores}</p>
    </form>
  );
};

export default App;
