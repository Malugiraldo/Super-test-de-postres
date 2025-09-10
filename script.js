// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://www.chewoutloud.com/wp-content/uploads/2023/08/Easy-Vanilla-Bean-Ice-Cream-No-Eggs-Vertical-e1692310374552.jpg",
  "https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2025/07/Dubai_Chocolate_Brownies-3-2-edited.jpg",
  "https://www.redpathsugar.com/sites/redpathsugar_com/files/styles/m/public/Churros_Dulce_de_Leche_500x400.jpg.webp?itok=skVoJhyp",
  "https://i.notrefamille.com/1200x0/smart/2020/09/24/53061-large.jpg",
  "https://www.kingarthurbaking.com/sites/default/files/2022-12/KABC_Quick-Breads_Blueberry-Muffin_08304.jpg",
  "https://www.sugarandsoul.co/wp-content/uploads/2017/04/best-birthday-cake-milkshake-2.jpg",
  "https://whatmollymade.com/wp-content/uploads/2017/03/chocolate-chip-pudding-cookies-recipe.jpg",
  "https://www.reluctantgourmet.com/wp-content/uploads/2012/07/classic-tiramisu-r.jpg",
  "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/b9/d1/18.jpg",
  "https://www.simplyorganic.com/media/wysiwyg/tmp/simply-organic-recipe-vanilla-bean-apple-pie-900x900.jpg",
];

const titulos = [
  "Helado de Vainilla",
  "Brownie de Chocolate Dubai",
  "Churros",
  "Pain Au Chocolat",
  "Muffin de Arándanos",
  "Malteada de Cumpleaños",
  "Galletas de Chispas de Chocolate",
  "Tiramisu",
  "Mochi",
  "Pie de Manzana",

];

const frases = [
  "Tu día estará marcado de simpliciad dulce y claridad. Hasta lo que parece más complicado se resolverá de manera más fácil de lo que pensabas. Consejo: a veces tu fuerza está en lo más básico",
  "La abundancia y el lujo te rondan. Hoy es un buen día para atreverte a desear más sin sentir culpa. Consejo: permite que la vida te consienta, aunque sea en un detalle pequeño.",
  " Tu energía se contagia. Habrá momentos de compartir y reír con otros que te traerán ligereza. Consejo: no te encierres, hoy tu buena vibra es un regalo para quienes te rodean.",
  "La dualidad te acompaña: placer y disciplina, trabajo y descanso. Hoy deberás encontrar el equilibrio entre lo que deseas y lo que debes hacer. Consejo: un respiro en medio de la rutina te dará claridad.",
  "Los frutos de tu esfuerzo comienzan a notarse, aunque en pequeño. Hoy recibirás una señal de progreso o reconocimiento. Consejo: celebra lo pequeño, porque anuncia lo grande.",
  "Hoy tu día tiene un aire de renovación y celebración. Es buen momento para cerrar ciclos y abrir otros con alegría. Consejo: haz algo simbólico que te recuerde que cada día puedes empezar de nuevo.",
  "Tu día estará marcado por la comodidad y el cobijo de lo conocido. Habrá un ambiente de cercanía que te recordará que no necesitas nada extraordinario para sentirte bien. Consejo: busca refugio en lo que te hace sentir en casa, incluso si estás lejos de ella.",
  "Hoy será un día de capas: lo que ves en la superficie no es todo lo que ocurre debajo. Habrá profundidad en tus conversaciones y momentos de revelación. Consejo: tómate el tiempo de ir más allá de lo obvio.",
  "Tu jornada tendrá un aire delicado pero poderoso. Algo sutil abrirá puertas que no imaginabas y traerá suavidad a lo difícil. Consejo: la ternura también puede ser una forma de fuerza",
  "Tu día será un refugio de ternura y cercanía. Habrá un llamado a disfrutar de la calma del hogar, de los afectos que abrigan y de esos instantes sencillos que saben a familia. Consejo: permítete detenerte y abrigarte en lo que te hace sentir protegido.",

];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();