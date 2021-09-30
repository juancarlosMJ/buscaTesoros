// declaramos nuestro anchura y altura y le damos valores 
const WIDTH = 400;
const HEIGH = 400;
// declaramos nuestra varibles let en este caso se llamara targen
let target = {
  x: getRandomNumber(WIDTH),//daclaramos nuestros ejes de las x.y
  y: getRandomNumber(HEIGH)
};

//  
let $map = document.querySelector('#map');
// lo gaurdamos en una variable  distance hacemos referencia al documento a la etiqueta html yamada sistance
let $distance = document.querySelector('#distance');// 
let clicks = 0;// creamos una variable y inpiesa encero 


//le agregamos un escuchador al evento  clic cuando el usuario aga clic el   raccionara 
$map.addEventListener('click', function (e) {
  //ejecutaremos el juego 
  console.log('click');
  clicks++; // un incremento en uno   
  //obtendremos la distacia con la funcion getdidtance  la funcion que hace uso del teorema de pitagoras este recive lo parametros 
  //el evento del clic tambien necesita el mapa del tesoro(target)
  let distance = getDistance(e, target);//para obtener los dos puntos para que me devuelva la distancia 
  let distanceHint = getDistanceHint(distance);// vamos utilizar la siguiente funcion para que me devuelva 
  //caliente,frio,tivio 
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;//colocamos el strig que nos devuelve de las pisastas 

  if (distance < 20 ) {//cuando el ususrio esta serca pero hacemos un if con una letra si
    //distance es menor que 20
        alert(`Found the treasure in ${clicks} clicks!`);
    location.reload(); //para refresacar la pagina con js 
  }
});
