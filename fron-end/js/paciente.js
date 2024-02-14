var paciente = [];
// Función para agregar un médico a la tabla y al array
function AgregarPaciente() {
    var TipoDocumento = document.getElementById("TipoDocumento").value;
    var NumeroDocumento = document.getElementById("NumeroDocumento").value;
    var PrimerNombre = document.getElementById("PrimerNombre").value;
    var SegundoNombre = document.getElementById("SegundoNombre").value;
    var PrimerApellido = document.getElementById("PrimerApellido").value;
    var SegundoApellido = document.getElementById("SegundoApellido").value;
    var Telefono = document.getElementById("Telefono").value;
    var Correo = document.getElementById("Correo").value;
    var NombreEmergencia = document.getElementById("NombreEmergencia").value;
    var TelefonoEmergencia = document.getElementById("TelefonoEmergencia").value;
    // Agregar el médico al array
    medicos.push({ TipoDocumento: TipoDocumento, NumeroDocumento: NumeroDocumento, PrimerNombre: PrimerNombre, SegundoNombre: SegundoNombre, PrimerApellido: PrimerApellido, SegundoApellido: SegundoApellido, Telefono: Telefono, Correo: Correo, NombreEmergencia: NombreEmergencia, TelefonoEmergencia: TelefonoEmergencia });

    // Actualizar la tabla
    actualizarTabla();
}

// // Función para filtrar los médicos en la tabla
// function filtrarMedicos() {
//     var filtroEspecialidad = document.getElementById("filtro_especialidad").value.toLowerCase();
//     var tabla = document.getElementById("tabla_medicos");
//     var rows = tabla.getElementsByTagName("tr");

//     for (var i = 1; i < rows.length; i++) {
//         var Especialidad = rows[i].getElementsByTagName("td")[9].innerText.toLowerCase();
//         if (Especialidad.includes(filtroEspecialidad) || filtroEspecialidad === "") {
//             rows[i].style.display = "";
//         } else {
//             rows[i].style.display = "none";
//         }
//     }
// }


function actualizarTabla() {
    var tabla = document.getElementById("tabla_paciente");
    tabla.innerHTML = `
    <tr>
    <th>Documento</th>
    <th>N° de documento</th>
    <th>Primer Nombre</th>
    <th>Segundo Nombre</th>
    <th>Primer Apellido</th>
    <th>Segundo Apellido</th>
    <th>Telefono</th>
    <th>Correo</th>
    <th>Nombre Emergencia</th>
    <th>Telefono Emergencia</th>

        <th>Editar</th>
        <th>Eliminar</th>
        </tr>
        `;

    for (var i = 0; i < paciente.length; i++) {
        tabla.innerHTML += `
            <tr>
                <td>${paciente[i].TipoDocumento}</td>
                <td>${paciente[i].NumeroDocumento}</td>
                <td>${paciente[i].PrimerNombre}</td>
                <td>${paciente[i].SegundoNombre}</td>
                <td>${paciente[i].PrimerApellido}</td>
                <td>${paciente[i].SegundoApellido}</td>
                <td>${paciente[i].Telefono}</td>
                <td>${paciente[i].Correo}</td>
                <td>${paciente[i].NombreEmergencia}</td>
                <td>${paciente[i].TelefonoEmergencia}</td>
                <td>
                <button onclick="editarPaciente(${i})">Editar</button>
                </td>
                <td>
                <button onclick="deshabilitarPaciente(${i})">Deshabilitar</button>
                </td>
                </tr>
                    `;
    }
}

// Función para editar un médico
function editarPaciente(index) {
    var nuevoTipoDocu = prompt("INGRESE EL NUEVO TIPO DE DOCUMENTO:", medicos[index].TipoDocumento);
    var nuevoNumeroDocu = prompt("INGRESE EL NUEVO EL NUEVO NUMERO DE DOCUMENTO:", medicos[index].NumeroDocumento);
    var nuevoPrimerNom = prompt("INGRESE EL NUEVO PRIMER NOMBRE:", medicos[index].PrimerNombre);
    var nuevoSegundoNom = prompt("INGRESE EL NUEVO SEGUNDO NOMBRE:", medicos[index].SegundoNombre);
    var nuevoPrimerApe = prompt("INGRESE EL NUEVO PRIMER APELLIDO:", medicos[index].PrimerApellido);
    var nuevoSegundoApe = prompt("INGRESE EL NUEVO SEGUNDO APELLIDO:", medicos[index].SegundoApellido);
    var nuevoTelefono = prompt("INGRESE EL NUEVO TELEFONO:", medicos[index].Telefono);
    var nuevoCorreo = prompt("INGRESE EL NUEVO CORREO:", medicos[index].Correo);
    var NombreEmergencia = prompt("INGRESE EL NUEVO NOMBRE DEL CONTACTO DE EMERGENCIA:", medicos[index].NombreEmergencia);
    var TelefonoEmergencia = prompt("INGRESE EL NUEVO NUMERO DE TELEFONO DEL CONTACTO:", medicos[index].TelefonoEmergencia);
    // Actualizar los datos del médico en el array
    if (nuevoTipoDocu !== null && nuevoNumeroDocu !== null && nuevoPrimerNom !== null && nuevoSegundoNom !== null && nuevoPrimerApe !== null && nuevoSegundoApe !== null && nuevoTelefono !== null && nuevoCorreo !== null && nuevoNombreEmergencia !== null && nuevoTelefonoEmergencia !== null) {
        paciente[index].TipoDocumento = nuevoTipoDocu;
        paciente[index].NumeroDocumento = nuevoNumeroDocu;
        paciente[index].PrimerNombre = nuevoPrimerNom;
        paciente[index].SegundoNombre = nuevoSegundoNom;
        paciente[index].PrimerApellido = nuevoPrimerApe;
        paciente[index].SegundoApellido = nuevoSegundoApe;
        paciente[index].Telefono = nuevoTelefono;
        paciente[index].Correo = nuevoCorreo;
        paciente[index].NombreEmergencia = nuevoNombreEmergencia;
        paciente[index].TelefonoEmergencia = nuevoTelefonoEmergencia;

        // Actualizar la tabla
        actualizarTabla();
    }
}

// Función para deshabilitar un médico
function deshabilitarPaciente(index) {
    // Eliminar el médico del array
    paciente.splice(index, 1);

    // Actualizar la tabla
    actualizarTabla();
}