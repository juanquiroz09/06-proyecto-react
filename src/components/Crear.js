import React,{useState} from 'react'
import { saveStorage } from '../helpers/saveStorage';

const Crear = ({setListState}) => {
  const titleComponent = "Añadir Pelicula"
  const [peliState, setPeliState] = useState({
    title: '',
    description: ''
  });

  const {id, headline} = peliState;

  const getDataForm = (e) =>{
    e.preventDefault();
    //Conseguir datos del formulario
    let target = e.target;
    let title = target.headline.value;
    let description = target.review.value;

    //Crear objeto de la película a guardar
    let peli = {
      id: new Date().getTime(),
      headline: title,
      review: description
    };

    //Guardar Estado
    setPeliState(peli);

    //Actualizar el estado del listado principal
    setListState(elements=>{
      return [...elements, peli]
    })

    //Guardar en el almacenamiento local
    saveStorage('pelis', peli);
  }

  return (
    <div className="add">
        <h3 className="title">{titleComponent}</h3>
        <strong>
          {(headline && id) && " Has creado la película: " + headline + ", Id: " + id}
        </strong>
        <form onSubmit={getDataForm}>
          <input type="text" id='headline' name='headline' placeholder="Titulo" />
          <textarea id='review' name='review' placeholder="Descripcion"></textarea>
          <input type="submit" value="Guardar" />
        </form>
      </div>
  )
}

export default Crear