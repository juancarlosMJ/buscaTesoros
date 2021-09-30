// crearemos una funcion para genere numeros aleatorios  
//creamos nuestra variable con el nombre de la funcion como un parametro de una funcion flecha 
let getRandomNumber = size =>  {
//       colocamos la funcion llamada (Math.floor que se encarga de convertir un numero decimal a entera)
  return Math.floor(Math.random() * size);
}

// Esta funcion se encarga de medir 2 puntos  esta funcion tamara 2 para metros los parametros a tomar seran los dos puntos 
let getDistance = (e, target) => {// el usario a dado un clic generamos un evento (e) le colocamos donde esta el mapa del tesoro este sera el obetivo (targen)clic
  let diffX = e.offsetX - target.x;//obtenemos la direncia de  los ejes de las x para esto calculamos donde hiso clicl el usario 
                                  //del evento nosda offsetx de esta manera el nos dice donde a dado clicl en nuetra imagen con esto restarlo  con el otro punto donde esta elt esroor 
  let diffY = e.offsetY - target.y;//li mismo para la direncia de las y 
  return Math.sqrt((diffX * diffX) + (diffY * diffY));//teorema de pitagoras otenemos la ra iz cuadrada de  
  //la suma de los catetos al cuadrado  epezamos a poen el eje del cuadrado el eje de las (x ,y)
  //asi obtendremos la distancia entre dos putos 
}

// creamos una funcion para darle una pista  que distancia esta al encontrar el tesoro 
let getDistanceHint = distance => {
  if (distance < 30) { //si la distancia es menor que treina  que esta a treita pixeles 
    return "Boiling hot!"; // retornamos que esta  muy serca
  } else if (distance < 40) { // si la distancia es menor que cuaretnta  ya no esta tan serca le devovemos 
    return "Really Hot";// le delvoveos  muy caliente 
  } else if (distance < 60) {// si la distancia  esta a 60 pixeles le devolvemos
    return "Hot";caliente 
  } else if (distance < 100) {//si la distancia es menor que 100le madamos un retorno que  le devolvemos yana frase 
    return "Warm";//calido
  } else if (distance < 180) {//si la distancia es menor que 180 le maadamos un retorno
    return "Cold";//el reporono 
  } else if (distance < 360) {// si la distancia es menor que  360
    return "Really Cold";//esta conjelado 
  } else {
    return "Freezing!";
  }
}
