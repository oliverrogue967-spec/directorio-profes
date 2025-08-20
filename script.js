// Lista de profesores (simulando base de datos)
// Cargar profesores desde localStorage o usar lista inicial
let profesores = JSON.parse(localStorage.getItem("profesores")) || [
    { nombre: "Juan Pérez", materia: "Matemáticas", correo: "juanp@mail.com" },
    { nombre: "María López", materia: "Historia", correo: "marial@mail.com" },
    { nombre: "Carlos Gómez", materia: "Química", correo: "carlosg@mail.com" },
];

// Mostrar todos los profesores al cargar la página
mostrarResultados(profesores);


// Función para buscar profesores
function buscarProfesor() {
    const input = document.getElementById("buscador").value.toLowerCase();
    const resultados = profesores.filter(prof => 
        prof.nombre.toLowerCase().includes(input) || 
        prof.materia.toLowerCase().includes(input)
    );

    mostrarResultados(resultados);
}

// Función para mostrar resultados
function mostrarResultados(lista) {
    const contenedor = document.getElementById("resultados");
    contenedor.innerHTML = ""; // Limpiar resultados anteriores

    if(lista.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron profesores.</p>";
        return;
    }

    lista.forEach(prof => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${prof.nombre}</strong> - ${prof.materia} - ${prof.correo}`;
        contenedor.appendChild(div);
    });
}

function agregarProfesor() {
    const nombre = document.getElementById("nombre").value.trim();
    const materia = document.getElementById("materia").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if(nombre === "" || materia === "" || correo === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Agregar nuevo profesor al arreglo
profesores.push({ nombre, materia, correo });

// Guardar en localStorage
localStorage.setItem("profesores", JSON.stringify(profesores));


    // Agregar nuevo profesor al arreglo
    profesores.push({ nombre, materia, correo });

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("correo").value = "";

    // Mostrar todos los profesores actualizados
    mostrarResultados(profesores);
}
