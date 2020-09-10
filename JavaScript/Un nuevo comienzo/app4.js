var luisElVago ={
  edad:24,
  estatura: 1.80,
  escuela:"La Calle",
  cuantosCholosHaMatadoLuisElVago: function(edad){
    return edad * estatura;
  }
}

console.log(luisElVago ['edad']);
console.log(luisElVago ['estatura']);
console.log(luisElVago ['escuela']);

nombre = prompt ('Ingresa la edad de Luis El Vago', '24');

document.write("Luis El Vago ha matado " + cuantosCholosHaMatadoLuisElVago() + ' Cholos');
