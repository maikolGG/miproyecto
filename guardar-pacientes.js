//obtenemos el formulario
const formularioPacientes = document.getElementById('registro-pacientes-form');
//Cuando el formulario se envie va hacer lo que esta entre corchetes (5-21)
formularioPacientes.addEventListener('submit', (event) => {
    event.preventDefault();//quietara por defecto el envio del formulario
    const datosPacientes = {  //definiendo un objeto
        //atributo = informacion del campo
        nombrePacientes: document.getElementById('name').value, 
        apellidoPacientes: document.getElementById('apellido').value,
        cedulaPacientes: document.getElementById('cedula').value,
        edadPacientes: document.getElementById('edad').value,
        telefonoPacientes: document.getElementById('telefono').value,
        especialidad: document.getElementById('especialidad').value
    };
    guardarEnCookie(datosPacientes)
    const confirmacion = confirm('¿Desea ver los datos o seguir añadiendo medicos?');
    if (confirmacion) {
        window.location.href = 'pacientes.html';
    } else {
        console.log('Continuando en el formulario');
        formularioPacientes.reset()
    }
});
// Función para guardar una mascota en la cookie
function guardarEnCookie(paciente) {
    // Obtener los datos de la cookie actual de mascotas
    let datosPaci = getCookie("pacientes");
    // Si la cookie está vacía, inicializarla como un arreglo vacío
    if (datosPaci === "") {
        datosPaci = "[]";
    }
    // Convertir la cookie en un arreglo de objetos
    const pacientes = JSON.parse(datosPaci);
    // Agregar la nueva mascota al arreglo
    pacientes.push(paciente);
    // Convertir el arreglo de mascotas de nuevo a un JSON
    const nuevoJSON = JSON.stringify(pacientes);
    // Guardar el JSON en la cookie
    setCookie("pacientes", nuevoJSON);
}

// Función para obtener los datos de la cookie
function getCookie(nombre) {
    //separa las cookies y las guarda en un arreglo
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            // devolver la infromacion de la cookie que se llama igual
            return decodeURIComponent(cookie[1]);
        }
    }
    //devolver vacio si no encuentra cookie
    return "";
}

// Función para guardar datos en la cookie
function setCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}
