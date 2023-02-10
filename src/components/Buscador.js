import React, { useState } from "react";

const Buscador = ({ listState, setListState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontado] = useState(false);
  const buscarPeli = (e) => {
    //Crear estado y actualizarlo
    setBusqueda(e.target.value);
    //Filtrar para buscar coincidencias
    let pelis_encontradas = listState.filter((peli) => {
      return peli.headline.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });
    //Comprobar si hay un resultado
    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontado(true);
    } else {
      setNoEncontado(false);
    }
    //Actualizar el listado principal con lo que he logrado filtrar
    setListState(pelis_encontradas);
  };
  return (
    <div className="search">
      <h3 className="title">Buscador:{busqueda}</h3>
      {(noEncontrado === true && busqueda.length > 1) && (
        <span className="no-encontrado">
          No se ha encontrado ninguna coincidencia
        </span>
      )}

      <form>
        <input
          type="text"
          placeholder="buscar..."
          name="busqueda"
          autoComplete="off"
          value={busqueda}
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;
