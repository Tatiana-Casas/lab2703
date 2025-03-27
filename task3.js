// - Sistema de gestión de inventario.
// Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, 
// o null si no. El inventario debería estar PREDEFINIDO
//ejemplo:
//const inventario = [
//{ nombre: "Camisa", precio: 20 },



function buscarProducto(nombre, inventario) {
    
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i] nombre === nombre) {
       
        return inventario[i];
      }
    }
  
   
    return null;
  }
  
  const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 40 },
    { nombre: "Sombrero", precio: 50 },
  ];