const formularioDoctor = document.getElementById('registro-medicos-form');
formularioDoctor.addEventListener('submit', (event) => {
    event.preventDefault();
    const datosDoctor = {//objeto
        nombreMedico: document.getElementById('nombre').value,
        apellidoMedico: document.getElementById('apellido').value,
        cedula: document.getElementById('cedula').value,
        consultorio: document.getElementById('consultorio').value,
        correoMedico: document.getElementById('correo').value,
        especialidad: document.getElementById('especialidad').value
    };
    guardarEnCookie(datosDoctor)
    const confirmacion = confirm('¿Desea ver los datos o seguir añadiendo doctores?');
    if (confirmacion) {
        window.location.href = 'doctores.html';
    } else {
        console.log('Continuando en el formulario');
        formularioDoctor.reset()
    }
});
// Función para guardar una medico en la cookie
function guardarEnCookie(doctor) {
    // Obtener los datos de la cookie actual
    let datosDoctor = getCookie("doctores");
    // Si la cookie está vacía, inicializarla como un arreglo vacío
    if (datosDoctor === "") {
        datosDoctor = "[]";
    }
    // Convertir la cookie en un arreglo de objetos
    const doctores = JSON.parse(datosDoctor);
    // Agregar la nueva medico al arreglo
    doctores.push(doctor);
    // Convertir el arreglo de medicos de nuevo a un JSON
    const nuevoJSON = JSON.stringify(doctores);
    // Guardar el JSON en la cookie
    setCookie("doctores", nuevoJSON);
}

// Función para obtener los datos de la cookie
function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}

// Función para guardar datos en la cookie
function setCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}
