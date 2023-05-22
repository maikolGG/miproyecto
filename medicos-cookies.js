//cargar los datos de la cookie
const doctoresCookie = JSON.parse(getCookie('doctores'));
const tablaDoctores = document.getElementById("tabla-medicos");
const cuerpoTabla = tablaDoctores.querySelector("tbody");
//length tamaño del arreglo
for (let i = 0; i < doctoresCookie.length; i++) {
    const doctor = doctoresCookie[i];
    const fila = cuerpoTabla.insertRow();
    const nombreDoctor = fila.insertCell();
    nombreDoctor.textContent = doctor.nombreMedico; 
    const apellidoDoctor = fila.insertCell();
    apellidoDoctor.textContent = doctor.apellidoMedico;
    const cedula = fila.insertCell();
    cedula.textContent = doctor.cedula;
    const consultorio = fila.insertCell();
    consultorio.textContent = doctor.consultorio;
    const correoMedico = fila.insertCell();
    correoMedico.textContent = doctor.correoMedico;
    const especialidad = fila.insertCell();
    especialidad.textContent = doctor.especialidad;
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