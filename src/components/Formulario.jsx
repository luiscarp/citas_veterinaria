import { useState } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes }) {
  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [error, setError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return (random+fecha)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()


    // Validacin de formulario
    // Comprobar que no existan campos vacios
    if([nombre, propietario, email, fecha, sintomas].includes("")){
      console.log("Al menos un campo vacio")
      setError(true)
      return

    }
    setError(false)

    //objeto paciente

    const objetoPaciente = {

      nombre, 
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    }

    

    setPacientes([...pacientes, objetoPaciente])

    //reiniciar formulario
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
    
  }

  
  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-3">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Anade pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      {error &&  <Error mensaje = {"Todos los campos son obligatorios"}></Error>}
      <form 
      onSubmit={handleSubmit}
      className=" bg-white shadow-md rounded-lg py-10 p-5 mb-10">
        <div className=" mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />
          
        </div>

        <div className=" mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email contacto propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          />
        </div>
        <input type="submit" 
        className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        value={"agregar paciente"}
        
        />
      </form>
    </div>
  );
}

export default Formulario;
