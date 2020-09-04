//var nombre;

nombre = prompt ('Ingresa tu nombre', 'Lupito');
alias = prompt ('Ingresa tu alias', 'El Agrio');

//document.write(nombre + " " + alias);
//escribe el nombre en el html

//console.log (nombre + " " + alias);
//registra el dato (nombre + alias)

//alert (nombre + " " + alias);
// manda una alerta en pantalla con el nombre



    function saludoAlUsuario(){
       document.write ('Sonrie a tu día ' + nombre + ' ' + alias + '.');
    }

    saludoAlUsuario();

  //  function suma(numero1, numero2){
    //  var numero1= numero1;
      //var numero2= numero2;

      //document.write (numero1 + numero2);
    //}

    //suma(10,20);

    function numeroMaximo (valor1, valor2){
      if (valor1>valor2){
      return valor1;
    }
        return valor2;
    }
    valor1 = prompt ('ingresa un valor', "0");
    valor2 = prompt ('ingresa otro valor', "0")

  document.write(" Tu numero chido es el " + numeroMaximo(valor1, valor2));
