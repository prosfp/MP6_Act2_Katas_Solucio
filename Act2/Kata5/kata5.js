function counter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(count);
    }
    //La variable count és una variable local de la funció counter. La funció increment és una funció interna (closure) que té accés a la variable count. La funció increment incrementa el valor de count i el mostra per consola.
    return increment;
  }
  
  const incrementCounter = counter();
  
  incrementCounter(); // imprimeix 1
  incrementCounter(); // imprimeix 2
  incrementCounter(); // imprimeix 3
  
  