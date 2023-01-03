  //Metodo guardar en Storage
  export const saveStorage = (key, element) => {
    //Conseguir elementos que ya tenemos en el LocalStorage
    let elements = JSON.parse(localStorage.getItem(key));
    //Comprobar si es un array
    if (Array.isArray(elements)) {
      elements.push(element);
    }else{
      //Crear un array con el nuevo elemento
      elements = [element];
    }
    //Guardar em el LocalStorage
    localStorage.setItem(key, JSON.stringify(elements));
    //Devolver Objeto
    return element;  
  }