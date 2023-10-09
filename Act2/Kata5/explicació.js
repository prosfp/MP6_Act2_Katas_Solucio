// Closure --> Âmbit d'una funció // Àmbit lèxic

// function funcioExterna() {
//   let nom = 'Pablo';
//   function funcioInterna() {
//     console.log(nom);
//   }

//   return funcioInterna();
// }

// let mevaFuncio = funcioExterna();

// funcioExterna();

function counter() {
  let numero = 0;

  return function increment() {
    numero++;
    return numero;
  };
}

const c = counter();
