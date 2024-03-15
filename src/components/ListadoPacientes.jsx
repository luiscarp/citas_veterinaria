function ListadoPacientes() {
  return (
    <div className=" w-1/2 lg:3/5">
      <h1 className=" font-black text-3xl text-center">Listado Pacientes</h1>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className=" text-indigo-600 font-bold">Pacientes y citas</span>
      </p>
      <div className="mt-5 bg-white shadow-md">
        <p>
          Nombre: <span>Hook</span>
        </p>
      </div>
    </div>
  );
}

export default ListadoPacientes;
