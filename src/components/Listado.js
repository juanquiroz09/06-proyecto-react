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
  };

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
              <button className="delete">Borrar</button>
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
