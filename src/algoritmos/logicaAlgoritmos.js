

const sortingAlgorithms = {
    /**
     * Colección de algoritmos de ordenamiento implementados para comparar su rendimiento.
     * Cada método recibe un array y devuelve una nueva versión ordenada.
     */
    bubble: function(arr) {
        let n = arr.length;
        let swapped;
        let array = [...arr];

        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                if (array[i] > array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    swapped = true;
                }
            }
            n--;
        } while (swapped);

        return array;
    },

    insertion: function(arr) {
        let array = [...arr];
        for (let i = 1; i < array.length; i++) {
            let current = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > current) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = current;
        }
        return array;
    },

    selection: function(arr) {
        let array = [...arr];
        for (let i = 0; i < array.length - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                let temp = array[i];
                array[i] = array[minIdx];
                array[minIdx] = temp;
            }
        }
        return array;
    },

    quick: function(arr) {
        let array = [...arr];
        
        function partition(arr, low, high) {
            let pivot = arr[high];
            let i = low - 1;
            
            for (let j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            return i + 1;
        }

        function quickSortHelper(arr, low, high) {
            if (low < high) {
                let pivotIndex = partition(arr, low, high);
                quickSortHelper(arr, low, pivotIndex - 1);
                quickSortHelper(arr, pivotIndex + 1, high);
            }
            return arr;
        }

        return quickSortHelper(array, 0, array.length - 1);
    },

    merge: function(arr) {
        let array = [...arr];

        function merge(left, right) {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;

            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }

            return result
                .concat(left.slice(leftIndex))
                .concat(right.slice(rightIndex));
        }

        function mergeSortHelper(arr) {
            if (arr.length <= 1) {
                return arr;
            }

            const middle = Math.floor(arr.length / 2);
            const left = arr.slice(0, middle);
            const right = arr.slice(middle);

            return merge(
                mergeSortHelper(left),
                mergeSortHelper(right)
            );
        }

        return mergeSortHelper(array);
    },
    
    heap: function(arr) {
        let array = [...arr];
        
        function heapify(arr, n, i) {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && arr[left] > arr[largest]) {
                largest = left;
            }

            if (right < n && arr[right] > arr[largest]) {
                largest = right;
            }

            if (largest !== i) {
                [arr[i], arr[largest]] = [arr[largest], arr[i]];
                heapify(arr, n, largest);
            }
        }

        function buildMaxHeap(arr) {
            const n = arr.length;
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
        }

        function heapSortHelper(arr) {
            buildMaxHeap(arr);
            
            for (let i = arr.length - 1; i > 0; i--) {
                [arr[0], arr[i]] = [arr[i], arr[0]];
                heapify(arr, i, 0);
            }
            return arr;
        }

        return heapSortHelper(array);
    }
};



function handleFile() {
        /**
     * Maneja la carga de archivos CSV, selección de algoritmo de ordenamiento
     * y muestra los resultados del ordenamiento.
     * Procesa el archivo, ordena los datos y calcula el tiempo de ejecución.
     */
    const input = document.getElementById('csvFile');
    const algorithmSelect = document.getElementById('algorithmSelect');
    const selectedAlgorithm = algorithmSelect.value;
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const text = event.target.result;
        const dataArray = parseCSV(text);

        // Verificar que se haya seleccionado un algoritmo
        if (!selectedAlgorithm) {
            alert('Por favor, selecciona un algoritmo de ordenamiento');
            return;
        }

        // Obtener la función de ordenamiento seleccionada
        const sortFunction = sortingAlgorithms[selectedAlgorithm];

        // Medir tiempo de ejecución
        const startTime = performance.now();
        const sortedArray = sortFunction(dataArray);
        const endTime = performance.now();

        const executionTime = (endTime - startTime).toFixed(2);
        displayResult(sortedArray, executionTime, selectedAlgorithm);
    };

    reader.readAsText(file);
}



function parseCSV(text) {
        /**
     * Convierte el contenido de un archivo CSV en un array de números.
     * Omite la primera línea (encabezados) y líneas vacías.
     * @param {string} text - Contenido del archivo CSV
     * @returns {number[]} Array de números extraídos del CSV
     */
    const lines = text.split('\n');
    const dataArray = [];

    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim()) {
            dataArray.push(Number(lines[i].trim()));
        }
    }

    return dataArray;
}

function displayResult(sortedArray, executionTime, selectedAlgorithm) {
    /**
     * Muestra los resultados del ordenamiento en la interfaz de usuario.
     * Incluye el array ordenado, tiempo de ejecución y algoritmo utilizado.
     */
    const resultDiv = document.getElementById('result');
    document.getElementById('clear-btn').style.display = "block";
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<p>Array ordenado: ${sortedArray.join(', ')}</p>`;
    resultDiv.innerHTML += `<p>Tiempo de ejecución: ${executionTime} milisegundos</p>`;
    resultDiv.innerHTML += `<p>Algoritmo utulizado: ${selectedAlgorithm} sort</p>`;
    
}

// Asignar handleFile al contexto global
window.handleFile = handleFile;