// JS Nuggets: Closures
// https://www.youtube.com/watch?v=Whtg9XTn_7Y&ab_channel=insomniocode

function funcioExterna() {
  var nom = "Pablo";
  function funcioInterna() {
    console.log(nom);
  }
  return funcioInterna;
}

var mevaFuncio = funcioExterna();

myFunc();

var comptador = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
