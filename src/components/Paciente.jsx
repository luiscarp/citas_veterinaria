function Paciente() {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className=" font-normal normal-case">Hook</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className=" font-normal normal-case">Luis</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className=" font-normal normal-case">correo@correo.com</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha alta:{" "}
        <span className=" font-normal normal-case">10/dic/2022</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className=" font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit
          omnis sint, repudiandae aut cumque sunt dignissimos, labore expedita
          soluta quis alias sequi corporis cum voluptas, odio aliquid non
          aliquam?
        </span>
      </p>
    </div>
  );
}

export default Paciente;
