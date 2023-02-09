import React from 'react'

const Editar = ({peli, getMovies, setEditar, setListState}) => {
  const titulo_componente = "Editar Película";
  const guardarEdicion = (e, id) => {
    e.preventDefault();
    //conseguir el target del evento
    let target = e.target;
    //buscar el indice de la pelicula a actualizar
    const pelis_almacenadas = getMovies();
    const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
    //Crear objeto con ese id de ese indice, con titulo y descripcion del formulario
    let pelis_actualizadas = {
      id ,
      headline: target.titulo.value,
      review: target.descripcion.value
    }
    //Actualizar ese elemento con ese indice
    pelis_almacenadas[indice] = pelis_actualizadas;
    //Guardar el nuevo array de objetos en el local storage
    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas))
    //Actualizar estados
    setListState(pelis_almacenadas)
    setEditar(0);

  }
  return (
    <div className='edit_form'>
       <hr/>
      <h3 className='title'>{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion(e, peli.id)}>
        <input type="text" name='titulo' className='titulo_editado' defaultValue={peli.headline} />
        <br/>
        <textarea name="descripcion" defaultValue={peli.review} className='description_editada'></textarea>
        <br/>
        <input type="submit" className='editar' value='Actualizar' />
      </form>
    </div>
  )
}

export default Editar;