// clear-result.js - Funcion para limpiar el resultado del array prdenado
function clearResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.style.display = "none";
    document.getElementById('clear-btn').style.display = "none";
}

window.clearResult = clearResult;