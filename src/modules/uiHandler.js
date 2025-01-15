// Importación de información detallada de los algoritmos desde un módulo externo
import { algorithmInfo } from '/src/algoritmos/dataAlgoritmos.js';

/**
 * Poblar dinámicamente el selector de algoritmos con opciones
 * basadas en la información predefinida de los algoritmos.
 */
function populateAlgorithmOptions() {
  const algorithmSelect = document.getElementById('algorithmSelect');

  // Limpiar las opciones existentes, dejando un mensaje inicial
  algorithmSelect.innerHTML = '<option value="">Selecciona un algoritmo</option>';

  // Iterar sobre los algoritmos disponibles y crear opciones para el selector
  for (const algorithm in algorithmInfo) {
    const option = document.createElement('option');
    option.value = algorithm;
    option.textContent = algorithmInfo[algorithm].title;
    algorithmSelect.appendChild(option);
  }
}

/**
 * Actualiza la interfaz de usuario con información detallada 
 * del algoritmo de ordenamiento seleccionado.
 * 
 * @param {string} algorithm - Clave del algoritmo seleccionado
 */
function updateAlgorithmInfo(algorithm) {
  const container = document.querySelector('.container');
  const workArea = document.querySelector('.work-area');
  const infoArea = document.getElementById('infoArea');
  const info = algorithmInfo[algorithm];

  if (info) {
    // Modificar el layout para mostrar información del algoritmo
    container.classList.add('layout-with-info');
    workArea.classList.add('work-area-with-info');
    infoArea.classList.add('infoArea-visible');

    // Generar contenido HTML dinámicamente con la información del algoritmo
    infoArea.innerHTML = `
      <div class="algorithm-info">
        <h2>${info.title}</h2>
        
        <div class="info-section">
          <h3>Descripción</h3>
          <p>${info.description}</p>
        </div>

        <div class="info-section">
          <h3>Complejidad</h3>
          <ul>
            <li><strong>Tiempo promedio:</strong> ${info.complexity.timeAverage}</li>
            <li><strong>Mejor caso:</strong> ${info.complexity.timeBest}</li>
            <li><strong>Peor caso:</strong> ${info.complexity.timeWorst}</li>
            <li><strong>Espacio:</strong> ${info.complexity.space}</li>
          </ul>
        </div>

        <div class="info-section">
          <h3>Ventajas</h3>
          <ul>
            ${info.pros.map(pro => `<li>${pro}</li>`).join('')}
          </ul>
        </div>

        <div class="info-section">
          <h3>Desventajas</h3>
          <ul>
            ${info.cons.map(con => `<li>${con}</li>`).join('')}
          </ul>
        </div>

        <div class="info-section">
          <h3>Cómo funciona</h3>
          <ol>
            ${info.howItWorks.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>

        <div class="visualization">
          <h3>Visualización</h3>
          <iframe width="420" height="315" src=${info.visualization}></iframe>
        </div>
      </div>
    `;
  } else {
    // Restaurar el layout original si no hay algoritmo seleccionado
    container.classList.remove('layout-with-info');
    workArea.classList.remove('work-area-with-info');
    infoArea.classList.remove('infoArea-visible');
    infoArea.innerHTML = '<p>Selecciona un algoritmo para ver su información.</p>';
  }
}

// Configuración de eventos al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
  const algorithmSelect = document.getElementById('algorithmSelect');

  // Poblar el selector de algoritmos al cargar la página
  populateAlgorithmOptions();

  // Añadir evento para actualizar información cuando se selecciona un algoritmo
  algorithmSelect.addEventListener('change', (e) => {
    updateAlgorithmInfo(e.target.value);
  });
});