import React from 'react'

const Editar = ({peli}) => {
  const titulo_componente = "Editar Película";
  return (
    <div className='edit_form'>
       <hr/>
      <h3 className='title'>{titulo_componente}</h3>
      <form>
        <input type="text" name='titulo' className='titulo_editado' defaultValue={peli.headline} />
        <br/>
        <textarea name="description" defaultValue={peli.review} className='description_editada'></textarea>
        <br/>
        <input type="submit" className='editar' value='Actualizar' />
      </form>
    </div>
  )
}

export default Editar;