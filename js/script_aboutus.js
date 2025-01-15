// Lista de imágenes para cada posición
const imagesLeft = [
  "images/projects_topics/builds.png",
  "images/projects_topics/cctv.png",
  "images/projects_topics/cloud.png",
];
const imagesCenter = [
  "images/projects_topics/dataanalyst.png",
  "images/projects_topics/database.png",
  "images/projects_topics/vr.png",
];
const imagesRight = [
  "images/projects_topics/web css.png",
  "images/projects_topics/web html.png",
  "images/projects_topics/web.png",
];

let currentIndex = 0;

function changeImages() {
  const leftImage = document.getElementById("img-left");
  const centerImage = document.getElementById("img-center");
  const rightImage = document.getElementById("img-right");

  currentIndex = (currentIndex + 1) % imagesLeft.length; // Cambiar índice de imagen

  // Actualizar las imágenes
  leftImage.src = imagesLeft[currentIndex];
  centerImage.src = imagesCenter[currentIndex];
  rightImage.src = imagesRight[currentIndex];
}

// Cambiar las imágenes cada 5 segundos
setInterval(changeImages, 5000);
