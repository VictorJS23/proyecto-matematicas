// const mainContent = document.getElementById('main-content')
// mainContent.innerHTML = ''

// const form = document.createElement('form')
// form.innerHTML = `
//     <label for="num1">Number 1:</label><br>
//     <input type="number" id="num1" name="num1"><br>
//     <label for="num2">Number 2:</label><br>
//     <input type="number" id="num2" name="num2"><br><br>
//     <button type="submit">Add</button><br>
//   `
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const num1 = parseFloat(document.getElementById('num1').value)
//     const num2 = parseFloat(document.getElementById('num2').value)
//     const sum = num1 + num2
//     mainContent.innerHTML = `The sum of the two numbers is: ${sum}`
// })

// mainContent.appendChild(form)

        const gridSizeInput = document.getElementById('grid-size');
        const gridSizeLabel = document.getElementById('grid-size-label');
        const gridContainer = document.getElementById('grid-container');
        const generateInputsButton = document.getElementById('generateInputs');
        const inputContainer = document.getElementById('input-container');

        // Función para crear la cuadrícula con el tamaño especificado
        function createGrid(size) {
            gridContainer.innerHTML = '';
            gridContainer.style.gridTemplateColumns = `repeat(${size}, 40px)`;
            gridContainer.style.gridTemplateRows = `repeat(${size}, 40px)`;

            for (let i = 0; i < size * size; i++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                gridContainer.appendChild(cell);
            }
        }

        // Función para generar los campos de entrada de tipo número
        function generateNumberInputs(size) {
            inputContainer.innerHTML = '';

            for (let i = 0; i < size; i++) {
                const row = document.createElement('div');
                row.classList.add('grid-row');
                for (let j = 0; j < size; j++) {
                    const input = document.createElement('input');
                    input.type = 'number';
                    input.classList.add('grid-input');
                    row.appendChild(input);
                }
                inputContainer.appendChild(row);
            }
        }

        // Actualiza el tamaño de la cuadrícula cuando cambia el valor del input
        gridSizeInput.addEventListener('input', () => {
            const newSize = gridSizeInput.value;
            gridSizeLabel.textContent = `${newSize}x${newSize}`;
            createGrid(newSize);
        });

        // Maneja el clic en el botón para generar los inputs
        generateInputsButton.addEventListener('click', () => {
            const gridSize = parseInt(gridSizeInput.value);
            generateNumberInputs(gridSize);
        });

        // Inicialmente crea la cuadrícula con el tamaño predeterminado
        createGrid(gridSizeInput.value);

// <<--------------------------------------------------------------------------------->> \\

function toggleMatrizMenu2() {
  const matrizMenu = document.getElementById('matrizMenu2');
  if (matrizMenu.style.display === 'none' || matrizMenu.style.display === '') {
    matrizMenu.style.display = 'block';
  } else {
    matrizMenu.style.display = 'none';
  }
}

// Obtén el elemento <select> por su ID
const selectElement = document.getElementById("selectOptions");

// Agrega un event listener para el cambio de selección
selectElement.addEventListener("change", function() {
    // Obtiene el valor de la opción seleccionada
    const selectedOption = selectElement.options[selectElement.selectedIndex].textContent;

    // Muestra una alerta con el valor seleccionado
    alert(selectedOption);
});

const matriz = [
    [1, 2, -2],
    [-2, -1, 2],
    [2, -2, 1]
]


function inverza() {
    alert('inverza')
}

function determinante(matrix) {
  // Verificar si la matriz es cuadrada
  if (matrix.length !== matrix[0].length) {
    throw new Error('La matriz no es cuadrada, por lo que no se puede calcular el determinante.');
  }

  // Caso base: matriz 2x2
  if (matrix.length === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let det = 0;

  for (let i = 0; i < matrix.length; i++) {
    // Calcular el cofactor
    const cofactor = matrix[0][i] * determinante(getSubmatrix(matrix, i));
    // Sumar o restar el cofactor al determinante según el índice de la columna
    det += (i % 2 === 0 ? 1 : -1) * cofactor;
  }

  return det;
}

function getSubmatrix(matrix, colIndex) {
  return matrix.slice(1).map(row => row.filter((_, i) => i !== colIndex));
}

const response = determinante(matriz)
console.log(response)

function transpuesta() {
    alert('transpuesta')
}

function cofactores() {
    alert('cofactores')
}

