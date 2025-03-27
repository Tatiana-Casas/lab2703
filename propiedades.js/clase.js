fuction persona (nombre, apellido) {
    this.nombre
    this. apellido
}
let persona 
//& Sin this
function Saludar(){
    return "Hola, soy Ana";
  }
  //& Con this
  function Gamer(nombre) {
    this.nombre = nombre;
    this.saludar = function() {
      return "Hola, soy " + this.nombre;
    };
  }
  let gamer5 = new Gamer("Ana");
  let gamer6 = new Gamer("Luis");
  console.log(gamer5.saludar(), gamer6.saludar());
  console.log(gamer5.saludar());
  console.log(gamer6.saludar());