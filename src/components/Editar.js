import React from 'react'

const Editar = () => {
  const titulo_componente = "Editar Película";
  return (
    <div className='edit_form'>
       <hr/>
      <h3 className='title'>{titulo_componente}</h3>
      <form>
        <input type="text" name='titulo' className='titulo_editado' defaultValue='Titulo original de la pelicula' />
        <br/>
        <textarea name="description" defaultValue='Descripcion Original' className='description_editada'></textarea>
        <br/>
        <input type="submit" className='editar' value='Actualizar' />
      </form>
    </div>
  )
}

export default Editar;