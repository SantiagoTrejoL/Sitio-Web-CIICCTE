// Variable en donde se almacena la informacion de los distintos algoritmos de ordenamiento
// la cual se esxporta para ser usada en uiHandler.js. 
// Esto nos permite poder agregar mas facilmente en un futuro mas algoritmos si asi se quisera
// ya que al almacenarse aqui con uiHandler.js se pueden generar de manera dinamica 

export const algorithmInfo = {
    bubble: {
        title: "Algoritmo de Burbuja (Bubble Sort)",
        description: "El algoritmo de burbuja es uno de los algoritmos de ordenamiento más simples. Funciona comparando repetidamente pares de elementos adyacentes y intercambiándolos si están en el orden incorrecto. El algoritmo recibe su nombre porque los elementos más pequeños 'burbujean' gradualmente hacia la parte superior del arreglo, como las burbujas de aire que suben en un líquido.",
        complexity: {
            timeAverage: "O(n²)",
            timeBest: "O(n)", // Cuando el array ya está ordenado
            timeWorst: "O(n²)",   
            space: "O(1)" // Ordenamiento in-place
        },
        pros: [
            "Muy fácil de entender y de implementar",
            "No requiere memoria adicional (ordenamiento in-place)",
            "Estable (mantiene el orden relativo de elementos iguales)",
            "Bueno para detectar si una lista ya está ordenada",
            "Útil para fines educativos y comprensión básica de algoritmos"
        ],
        cons: [
            "Muy ineficiente para conjuntos de datos grandes",
            "Tiene una complejidad cuadrática en la mayoría de los casos",
            "Realiza intercambios incluso cuando no son necesarios",
            "No es adecuado para estructuras de datos grandes o aplicaciones profesionales",
            "Es uno de los algoritmos de ordenamiento más lentos en la práctica"
        ],
        howItWorks: [
            "Comienza comparando el primer elemento con el segundo",
            "Si el primer elemento es mayor que el segundo, los intercambia",
            "Luego compara el segundo con el tercer elemento y repite el proceso",
            "Continúa hasta llegar al final del array",
            "Al terminar una pasada, el elemento más grande estará al final",
            "Repite el proceso para los n-1 elementos restantes",
            "Continúa hasta que no se realicen más intercambios en una pasada completa"
        ],
        visualization: 
            "https://www.youtube.com/embed/Cq7SMsQBEUw?si=IgM10GKtRDW9zzOf"
        
    },
    insertion: {
        title: "Algoritmo de Inserción (Insertion Sort)",
        description: "El algoritmo de inserción es un algoritmo de ordenamiento que construye la lista final insertando un elemento a la vez en su posición correcta. Funciona de manera similar a como las personas ordenan cartas en su mano: se toma una carta y se inserta en su posición correcta entre las cartas ya ordenadas.",
        complexity: {
            timeAverage: "O(n²)",
            timeBest: "O(n)", // Cuando el array está casi ordenado
            timeWorst: "O(n²)",
            space: "O(1)" // Ordenamiento in-place
        },
        pros: [
            "Eficiente para conjuntos de datos pequeños (menos de 50 elementos)",
            "Muy eficiente en arrays casi ordenados",
            "Estable (mantiene el orden relativo de elementos iguales)",
            "Ordenamiento in-place (no requiere espacio adicional)",
            "Simple de implementar",
            "Funciona bien para ordenar arrays a medida que se reciben los elementos"
        ],
        cons: [
            "Ineficiente para conjuntos de datos grandes",
            "Rendimiento cuadrático en el peor caso",
            "No tan eficiente como algoritmos avanzados como QuickSort o MergeSort"
        ],
        howItWorks: [
            "Comienza con el primer elemento considerado como parte ordenada",
            "Toma el siguiente elemento y lo compara con los elementos en la parte ordenada",
            "Inserta el elemento en su posición correcta dentro de la parte ordenada",
            "Repite los pasos 2-3 hasta procesar todos los elementos"
        ],
        visualization: 
            "https://www.youtube.com/embed/8oJS1BMKE64?si=TW6nyXe1ypCgJEPR"
        
    },
    selection: {
        title: "Algoritmo de Selección (Selection Sort)",
        description: "El algoritmo de selección es un algoritmo de ordenamiento que divide la lista de entrada en dos partes: una sublista de elementos ya ordenados y una sublista de elementos restantes por ordenar. En cada iteración, encuentra el elemento más pequeño de la sublista desordenada y lo agrega al final de la sublista ordenada.",
        complexity: {
            timeAverage: "O(n²)",
            timeBest: "O(n²)", // Incluso con array ordenado
            timeWorst: "O(n²)",
            space: "O(1)" // Ordenamiento in-place
        },
        pros: [
            "Simple de implementar y entender",
            "Funciona bien en listas pequeñas",
            "Realiza menos intercambios que el algoritmo de burbuja",
            "Rendimiento predecible (siempre O(n²))",
            "No requiere espacio adicional (ordenamiento in-place)",
            "Funciona bien cuando el costo de escribir en memoria es alto"
        ],
        cons: [
            "Ineficiente para listas grandes",
            "Tiempo cuadrático en todos los casos",
            "No es estable (puede alterar el orden relativo de elementos iguales)",
            "No aprovecha el orden existente en la lista",
            "Siempre realiza O(n²) comparaciones incluso si la lista está ordenada"
        ],
        howItWorks: [
            "Divide la lista en una parte ordenada (inicialmente vacía) y una parte desordenada",
            "Encuentra el elemento más pequeño en la parte desordenada",
            "Intercambia este elemento con el primer elemento de la parte desordenada",
            "Mueve el límite entre las partes ordenada y desordenada una posición hacia la derecha",
            "Repite los pasos 2-4 hasta que toda la lista esté ordenada",
            "En cada paso, la parte izquierda de la lista se mantiene ordenada",
            "El algoritmo termina cuando la parte desordenada queda vacía"
        ],
        visualization: 
            "https://www.youtube.com/embed/92BfuxHn2XE?si=0RmXiOngChSeFj2C"
        
    },
    quick: {
        title: "Algoritmo Quick Sort",
        description: "Quick Sort es un algoritmo de ordenamiento eficiente que utiliza la estrategia 'divide y vencerás'. Funciona seleccionando un elemento 'pivote' y particionando el array alrededor de este pivote, de manera que los elementos menores queden a la izquierda y los mayores a la derecha.",
        complexity: {
            timeAverage: "O(n log n)",
            timeBest: "O(n log n)",
            timeWorst: "O(n²)", // Cuando el pivote siempre es el menor o mayor elemento
            space: "O(log n)" // Debido a la recursión
        },
        pros: [
            "Muy eficiente en la práctica",
            "Buena localidad de referencia",
            "Bajo uso de memoria adicional",
            "Funciona bien con sistemas de caché",
            "Es el algoritmo de ordenamiento predeterminado en muchos lenguajes"
        ],
        cons: [
            "No es estable (puede alterar el orden de elementos iguales)",
            "El rendimiento depende mucho de la elección del pivote",
            "Puede ser O(n²) en el peor caso",
            "No es tan eficiente para arrays pequeños"
        ],
        howItWorks: [
            "Selecciona un elemento como pivote",
            "Particiona el array moviendo elementos menores al pivote a la izquierda",
            "Coloca el pivote en su posición final",
            "Recursivamente ordena las sub-arrays a la izquierda y derecha del pivote",
            "Combina los resultados (automáticamente al estar en el mismo array)"
        ],
        visualization: 
            "https://www.youtube.com/embed/8hEyhs3OV1w?si=ZLTvlcRrxkJsZUBn"
        
    },
    merge: {
        title: "Algoritmo Merge Sort",
        description: "Merge Sort es un algoritmo de ordenamiento estable que utiliza el principio 'divide y vencerás'. Divide el array en mitades, ordena recursivamente cada mitad y luego combina las mitades ordenadas.",
        complexity: {
            timeAverage: "O(n log n)",
            timeBest: "O(n log n)",
            timeWorst: "O(n log n)",
            space: "O(n)" // Requiere un array adicional para combinar
        },
        pros: [
            "Rendimiento garantizado O(n log n)",
            "Estable (mantiene el orden de elementos iguales)",
            "Predecible en todos los casos",
            "Muy eficiente para datos enlazados",
            "Paralelizable"
        ],
        cons: [
            "Requiere espacio adicional O(n)",
            "No tan eficiente en memoria cache como QuickSort",
            "Más lento que QuickSort para arrays en memoria",
            "Mayor uso de memoria que los algoritmos in-place"
        ],
        howItWorks: [
            "Divide el array en dos mitades",
            "Recursivamente ordena cada mitad",
            "Combina las mitades ordenadas en un solo array",
            "Usa un array auxiliar para el proceso de combinación",
            "Copia el resultado de vuelta al array original"
        ],
        visualization: 
            "https://www.youtube.com/embed/ZRPoEKHXTJg?si=2vaBfvvtLxjXfP6-"
        
    },
    heap: {
        title: "Algoritmo Heap Sort",
        description: "Heap Sort es un algoritmo de ordenamiento basado en comparación que utiliza una estructura de datos llamada heap (montículo). Primero construye un heap máximo y luego extrae repetidamente el elemento máximo para ordenar el array.",
        complexity: {
            timeAverage: "O(n log n)",
            timeBest: "O(n log n)",
            timeWorst: "O(n log n)",
            space: "O(1)" // In-place
        },
        pros: [
            "Rendimiento garantizado O(n log n)",
            "Ordenamiento in-place (no requiere memoria adicional)",
            "Eficiente para encontrar los k elementos más grandes/pequeños",
            "Rendimiento consistente",
            "Útil cuando el espacio es una limitación"
        ],
        cons: [
            "No es estable",
            "Más lento que QuickSort en la práctica",
            "Mala localidad de referencia",
            "Complejo de implementar",
            "No adaptativo"
        ],
        howItWorks: [
            "Construye un heap máximo a partir del array",
            "Intercambia la raíz (máximo) con el último elemento",
            "Reduce el tamaño del heap en 1",
            "Hace heapify en la raíz",
            "Repite los pasos 2-4 hasta que el heap está vacío"
        ],
        visualization:
            "https://www.youtube.com/embed/_bkow6IykGM?si=Tczbf4MbwwqvDo36"
    }
    // Añade más algoritmos aquí...
};
