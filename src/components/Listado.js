import React, { useEffect, useState } from "react";
import Editar from "./components/Editar";

export const Listado = ({listState, setListState}) => {
  //const [listState, setListState] = useState([]);
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("componente cargado");
    getMovies();
  },[]);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("pelis"));
    setListState(movies);

    return movies;
  };

  const borrarPeli = (id) => {
    //Conseguir peliculas almacenadas
    let pelis_almacenadas = getMovies();

    //Filtrar esas películas para que elimine del array lo que no quiero
    let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
    console.log(pelis_almacenadas, nuevo_array_peliculas);
    //Actualizar estado del listado
    setListState(nuevo_array_peliculas);
    //Actualizar los datos en el localStorage
    localStorage.setItem('pelis',JSON.stringify(nuevo_array_peliculas));
 
  }

  return (
    <>
      {/*Aqui van las peliculas*/}
      {listState != null ? (
        listState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.headline}</h3>
              <p className="description">{peli.review}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
              {/*aqui aparece el formulario de editar */}
              {editar === peli.id && (
              <Editar></Editar>
              )}
              
            </article>
          );
        })
      ) : (
        <h2>No hay Películas para Mostrar</h2>
      )}
    </>
  );
};

export default Listado;
