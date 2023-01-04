import React, { useEffect } from "react";

export const Listado = ({listState, setListState}) => {
  //const [listState, setListState] = useState([]);

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
              <button className="edit">Editar</button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
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
