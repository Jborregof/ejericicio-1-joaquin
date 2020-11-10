// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada 'createUsers'. Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto 'Array', 'filter'.
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada 'filterUsers' que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función 'onLoad' deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener('load', onLoad);

//funcion onload que se ejecuta al cargar la pagina
function onLoad() {
  //Ejecutamos la funcion createUser, definida posteriormente en el documento
  createUser();

  //Instanciamos la variable result, que será el array que devuelve la funcion filterUsers() sobre el array inicial
  const result = filterUsers(array);

  //EXTRA: No lo pide el ejercicio, lo he hecho para verlo mas visual
  mostrarResultadoHtml(result);

  //Mostrar resultados por consola
  console.log('El array inicial es: ', array);
  console.log('El resultado del filtro es ', result);
}

//Definimos la variable global array que será, literalmente, un array
var array = [];

//Creamos un metodo constructor para el objeto User, para hacerlo de forma mas general
function User(name, country, money, premiumAccount) {
  (this.name = name),
    (this.country = country),
    (this.money = money),
    (this.premiumAccount = premiumAccount);
}

//funcion createUser donde instanciamos los 7 users y los metemos en la variable global array
function createUser() {
  const user1 = new User('Usuario1', 'Spain', 199, true);
  const user2 = new User('Usuario2', 'France', 0, false);
  const user3 = new User('Usuario3', 'Spain', 537, false);
  const user4 = new User('Usuario4', 'Italy', 1004, true);
  const user5 = new User('Usuario5', 'Spain', 250, false);
  const user6 = new User('Usuario6', 'Italy', 799, true);
  const user7 = new User('Usuario7', 'Spain', 3345, false);
  array.push(user1, user2, user3, user4, user5, user6, user7);
}

//funcion que recibirá por parámetros el array y devolverá el array filtrado.
function filterUsers(array) {
  return array.filter(user => user.country == 'Spain' && user.money > 200);
}

//EXTRA No lo pide el ejercicio, lo he hecho para verlo mas visual
function mostrarResultadoHtml(res) {
  let str = 'El resultado del filtro es: ';
  res.forEach(function(user) {
    str += user.name + ', ';
  });
  str = str.substring(0, str.length - 2) + '.';
  document.getElementById('resultado').textContent = str;
  document.getElementById('resultado').style.padding = 15;
}
