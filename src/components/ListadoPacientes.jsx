import Paciente from "./Paciente";

function ListadoPacientes( {pacientes} ) {

  return (
    <div className=" md:w-1/2 lg:w-3/5 ">
      <h1 className=" font-black text-3xl text-center">
        Listado  Pacientes
      </h1>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className=" text-indigo-600 font-bold">Pacientes y citas</span>
      </p>

      <div className=" md:h-screen md:overflow-y-scroll">
        {pacientes.map ((paciente) => {

          return(
            <Paciente
            key={paciente.id}
            paciente = {paciente}
            ></Paciente>
          )
        })}

        

      </div>
    </div>
  );
}

export default ListadoPacientes;
