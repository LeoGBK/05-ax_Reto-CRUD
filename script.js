const tarjeta = document.getElementById('tarjeta');

const boton = document.querySelector('button');

// Initializing counter for card counting.
let counter = 1;

// In order to make the button existance reasonable I'm adding a function to practice.
boton.onclick = function () {
    if (boton.textContent === "Agregar Componente") {
        const nueva = document.createElement('div');
        nueva.innerHTML = `<h3>Componente #${counter}</h3> <p>Descripción de Componente #${counter}</p>`;
        tarjeta.appendChild(nueva);
        boton.textContent = "Editar Componente";
    }

    else {
        const editada = tarjeta.lastElementChild;
        if (editada) {
            editada.innerHTML = `<h3>Componente #${counter} Editado</h3> <p>Este es el nuevo contenido del componente #${counter}.</p>`;
        }
        boton.textContent = "Agregar Componente";
        counter++;
    }

}
