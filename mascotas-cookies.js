//cargar los datos de la cookie
//cargar los medicos y mascotas que ya esten guardados, como estan en formato JSON se pasan a objetos para poder trabajarlos en js
const pacientesCookie = JSON.parse(getCookie('pacientes'));
//buscar la tabla mascotas en HTML para agregar las nuevas mascotas
const tablaPacientes = document.getElementById("tabla-pacientes");
const cuerpoTabla = tablaPacientes.querySelector("tbody");

for (let i = 0; i < pacientesCookie.length; i++) {
    const paciente = pacientesCookie[i];
    //insertar fila para agregar mascotas
    const fila = cuerpoTabla.insertRow();
    //insertar celdas para agregar cada uno de los datos de las mascotas
    const celdaNombrePacientes = fila.insertCell();
    const celdaApellidoPacientes = fila.insertCell();
    const celdaCedulaPacientes = fila.insertCell();
    const celdaEdadPacientes = fila.insertCell();
    const celdaTelefonoPacientes = fila.insertCell();
    const celdaEspecialidad = fila.insertCell();
    //agregar la informaciona cada una de las celdas de la tabla
    celdaNombrePacientes.textContent = paciente.nombrePacientes;
    celdaApellidoPacientes.textContent = paciente.apellidoPacientes;
    celdaCedulaPacientes.textContent = paciente.cedulaPacientes;
    celdaEdadPacientes.textContent = paciente.edadPacientes;
    celdaTelefonoPacientes.textContent = paciente.telefonoPacientes;
    celdaEspecialidad.textContent = paciente.especialidad;

}


// Función para obtener los datos de la cookie
function getCookie(nombre) {
    //separa todas las cookies que se tengan
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        //busca la cookie que necesitemos en este caso la cookie llamada mascota
        if (cookie[0] === nombre) {
            //si encuentra la cookie devuelve la informacion desencriptada (en formato JSON)
            return decodeURIComponent(cookie[1]);
        }
    }
    //si no encuentra ninguna cookie devuelve vacio
    return "";
}