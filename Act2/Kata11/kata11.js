// Crea una pàgina HTML senzilla amb un botó que digui "Obre Finestra Emergent". Utilitza l'objecte window per obrir una finestra emergent (popup) quan es fa clic al botó. Personalitza la mida i la posició de la finestra emergent i permet que l'usuari pugui introduir la URL amb que s'obrirà.

function finestraEmergent() {
  const url = prompt('Introdueix la URL:');
  const width = 500;
  const height = 500;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  window.open(
    url,
    'La meva finestra emergent',
    `width=${width},height=${height},left=${left},top=${top}`
  );
}

// Alerta amb Window: Afegeix un altre botó que digui "Mostra Alerta". Utilitza l'objecte window per mostrar una alerta (finestra emergent d'alerta) amb un missatge quan es fa clic al botó. Informació de Navegador amb navigator:

function alerta() {
  alert('Hola, això és una alerta!');
}

// Crea una secció a la pàgina que mostri informació sobre el navegador de l'usuari. Amb Navigator pots accedir a propietats com userAgent, platform, language, etc., i mostra aquestes dades a la pàgina. També dona a conèixer les extensions instal·lades a l'ordinador.

const pluginsArray = Array.from(navigator.plugins);
let pluginList = '';

for (let i = 0; i < pluginsArray.length; i++) {
  pluginList += `<li>${pluginsArray[i].name}</li>`;
}

console.log(pluginList);

const browserInfo = `
    <p>User Agent: ${navigator.userAgent}</p>
    <p>Platform: ${navigator.platform}</p>
    <p>Language: ${navigator.language}</p>
    <p>Extensions</p>
    <ul>${pluginList}</ul>
`;

document.getElementById('browser-info').innerHTML = browserInfo;

// Canviar el Títol de la Pàgina amb document: Afegeix un camp d'entrada de text i un botó. Utilitza l'objecte document per canviar el títol de la pàgina quan es fa clic al botó. El nou títol ha de ser el text introduït per l'usuari al camp d'entrada. Redireccionar amb location:

function canviarTitol() {
  const nouTitol = document.getElementById('nou-titol').value;
  document.title = nouTitol;
}

// Afegeix un altre botó que digui "Ves a Google". Utilitza l'objecte location per redirigir l'usuari a la pàgina d'inici de Google quan es fa clic al botó. Comprova si l'usuari està connectat a Internet abans de redirigir-lo.

function aGoogle() {
  if (navigator.onLine) {
    location.href = 'https://www.google.com';
  } else {
    alert('No estàs connectat a Internet');
  }
}
