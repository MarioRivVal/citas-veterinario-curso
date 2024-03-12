import { useState, useEffect } from "react";

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];

  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  function eliminarPaciente(id) {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className=" md:flex mt-12">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
