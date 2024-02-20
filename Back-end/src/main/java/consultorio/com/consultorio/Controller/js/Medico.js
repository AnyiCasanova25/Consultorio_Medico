/*
var medicos = [];
 Función para agregar un médico a la tabla y al array
function AgregarMedico() {
    var TipoDocumento = document.getElementById("TipoDocumento").value;
    var NumeroDocumento = document.getElementById("NumeroDocumento").value;
    var PrimerNombre = document.getElementById("PrimerNombre").value;
    var SegundoNombre = document.getElementById("SegundoNombre").value;
    var PrimerApellido = document.getElementById("PrimerApellido").value;
    var SegundoApellido = document.getElementById("SegundoApellido").value;
    var Telefono = document.getElementById("Telefono").value;
    var Correo = document.getElementById("Correo").value;
    var Direccion = document.getElementById("Direccion").value;
    var Especialidad = document.getElementById("Especialidad").value;
     Agregar el médico al array
    medicos.push({ TipoDocumento: TipoDocumento, NumeroDocumento: NumeroDocumento, PrimerNombre: PrimerNombre, SegundoNombre: SegundoNombre, PrimerApellido: PrimerApellido, SegundoApellido: SegundoApellido, Telefono: Telefono, Correo: Correo, Direccion: Direccion, Especialidad: Especialidad });

     Actualizar la tabla
    actualizarTabla();
}

 Función para filtrar los médicos en la tabla
function filtrarMedicos() {
    var filtroEspecialidad = document.getElementById("filtro_especialidad").value.toLowerCase();
    var tabla = document.getElementById("tabla_medicos");
    var rows = tabla.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var Especialidad = rows[i].getElementsByTagName("td")[9].innerText.toLowerCase();
        if (Especialidad.includes(filtroEspecialidad) || filtroEspecialidad === "") {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

 Función para actualizar la tabla de médicos
function actualizarTabla() {
    var tabla = document.getElementById("tabla_medicos");
    tabla.innerHTML = `
    <tr>
        <th>TipoDocumento</th>
        <th>NumeroDocumento</th>
        <th>PrimerNombre</th>
        <th>SegundoNombre</th>
        <th>PrimerApellido</th>
        <th>SegundoApellido</th>
        <th>Telefono</th>
        <th>Correo</th>
        <th>Direccion</th>
        <th>Especialidad</th>
        <th>Acciones</th>
        </tr>
        `;

    for (var i = 0; i < medicos.length; i++) {
        tabla.innerHTML += `
            <tr>
                <td>${medicos[i].TipoDocumento}</td>
                <td>${medicos[i].NumeroDocumento}</td>
                <td>${medicos[i].PrimerNombre}</td>
                <td>${medicos[i].SegundoNombre}</td>
                <td>${medicos[i].PrimerApellido}</td>
                <td>${medicos[i].SegundoApellido}</td>
                <td>${medicos[i].Telefono}</td>
                <td>${medicos[i].Correo}</td>
                <td>${medicos[i].Direccion}</td>
                <td>${medicos[i].Especialidad}</td>
                <td>
                    <button onclick="editarMedico(${i})">Editar</button>
                    <button onclick="deshabilitarMedico(${i})">Deshabilitar</button>
                    </td>
                    </tr>
                    `;
    }
}

 Función para editar un médico
function editarMedico(index) {
    var nuevoTipoDocu = prompt("INGRESE EL NUEVO TIPO DE DOCUMENTO:", medicos[index].TipoDocumento);
    var nuevoNumeroDocu = prompt("INGRESE EL NUEVO EL NUEVO NUMERO DE DOCUMENTO:", medicos[index].NumeroDocumento);
    var nuevoPrimerNom = prompt("INGRESE EL NUEVO PRIMER NOMBRE:", medicos[index].PrimerNombre);
    var nuevoSegundoNom = prompt("INGRESE EL NUEVO SEGUNDO NOMBRE:", medicos[index].SegundoNombre);
    var nuevoPrimerApe = prompt("INGRESE EL NUEVO PRIMER APELLIDO:", medicos[index].PrimerApellido);
    var nuevoSegundoApe = prompt("INGRESE EL NUEVO SEGUNDO APELLIDO:", medicos[index].SegundoApellido);
    var nuevoTelefono = prompt("INGRESE EL NUEVO TELEFONO:", medicos[index].Telefono);
    var nuevoCorreo = prompt("INGRESE EL NUEVO CORREO:", medicos[index].Correo);
    var nuevoDireccion = prompt("INGRESE LA NUEVA DIRECCION:", medicos[index].Direccion);
    var nuevoEspecialidad = prompt("INGRESE LA NUEVA ESPECIALIDAD:", medicos[index].Especialidad);
     Actualizar los datos del médico en el array
    if (nuevoTipoDocu !== null && nuevoNumeroDocu !== null && nuevoPrimerNom !== null && nuevoSegundoNom !== null && nuevoPrimerApe !== null && nuevoSegundoApe !== null && nuevoTelefono !== null && nuevoCorreo !== null && nuevoDireccion !== null && nuevoEspecialidad !== null) {
        medicos[index].TipoDocumento = nuevoTipoDocu;
        medicos[index].NumeroDocumento = nuevoNumeroDocu;
        medicos[index].PrimerNombre = nuevoPrimerNom;
        medicos[index].SegundoNombre = nuevoSegundoNom;
        medicos[index].PrimerApellido = nuevoPrimerApe;
        medicos[index].SegundoApellido = nuevoSegundoApe;
        medicos[index].Telefono = nuevoTelefono;
        medicos[index].Correo = nuevoCorreo;
        medicos[index].Direccion = nuevoDireccion;
        medicos[index].Especialidad = nuevoEspecialidad;

         Actualizar la tabla
        actualizarTabla();
    }
}

 Función para deshabilitar un médico
function deshabilitarMedico(index) {
     Eliminar el médico del array
    medicos.splice(index, 1);

     Actualizar la tabla
    actualizarTabla();
}
*/
var medicos = [];
// Función para agregar un médico a la tabla y al array
function AgregarMedico() {
    var TipoDocumento = document.getElementById("TipoDocumento").value;
    var NumeroDocumento = document.getElementById("NumeroDocumento").value;
    var PrimerNombre = document.getElementById("PrimerNombre").value;
    var SegundoNombre = document.getElementById("SegundoNombre").value;
    var PrimerApellido = document.getElementById("PrimerApellido").value;
    var SegundoApellido = document.getElementById("SegundoApellido").value;
    var Telefono = document.getElementById("Telefono").value;
    var Correo = document.getElementById("Correo").value;
    var Especialidad = document.getElementById("Especialidad").value;
    // Agregar el médico al array
    medicos.push({ TipoDocumento: TipoDocumento, NumeroDocumento: NumeroDocumento, PrimerNombre: PrimerNombre, SegundoNombre: SegundoNombre, PrimerApellido: PrimerApellido, SegundoApellido: SegundoApellido, Telefono: Telefono, Correo: Correo, Especialidad: Especialidad });

    // Actualizar la tabla
    actualizarTabla();
}

// Función para filtrar los médicos en la tabla
function filtrarMedicos() {
    var filtroEspecialidad = document.getElementById("filtro_especialidad").value.toLowerCase();
    var tabla = document.getElementById("tabla_medicos");
    var rows = tabla.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var Especialidad = rows[i].getElementsByTagName("td")[9].innerText.toLowerCase();
        if (Especialidad.includes(filtroEspecialidad) || filtroEspecialidad === "") {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Función para actualizar la tabla de médicos
function actualizarTabla() {
    var tabla = document.getElementById("tabla_medicos");
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
    <th>Especialidad</th>

        <th>Editar</th>
        <th>Eliminar</th>
        </tr>
        `;

    for (var i = 0; i < medicos.length; i++) {
        tabla.innerHTML += `
            <tr>
                <td>${medicos[i].TipoDocumento}</td>
                <td>${medicos[i].NumeroDocumento}</td>
                <td>${medicos[i].PrimerNombre}</td>
                <td>${medicos[i].SegundoNombre}</td>
                <td>${medicos[i].PrimerApellido}</td>
                <td>${medicos[i].SegundoApellido}</td>
                <td>${medicos[i].Telefono}</td>
                <td>${medicos[i].Correo}</td>
                <td>${medicos[i].Especialidad}</td>
                <td>
                <button class="btn btn-primary" onclick="editarMedico(${i})">Editar</button>
                </td>
                <td>
                <button class="btn btn-primary" onclick="deshabilitarMedico(${i})">Deshabilitar</button>
                </td>
                </tr>
                    `;
    }
}

// Función para editar un médico
function editarMedico(index) {
    var nuevoTipoDocu = prompt("INGRESE EL NUEVO TIPO DE DOCUMENTO:", medicos[index].TipoDocumento);
    var nuevoNumeroDocu = prompt("INGRESE EL NUEVO EL NUEVO NUMERO DE DOCUMENTO:", medicos[index].NumeroDocumento);
    var nuevoPrimerNom = prompt("INGRESE EL NUEVO PRIMER NOMBRE:", medicos[index].PrimerNombre);
    var nuevoSegundoNom = prompt("INGRESE EL NUEVO SEGUNDO NOMBRE:", medicos[index].SegundoNombre);
    var nuevoPrimerApe = prompt("INGRESE EL NUEVO PRIMER APELLIDO:", medicos[index].PrimerApellido);
    var nuevoSegundoApe = prompt("INGRESE EL NUEVO SEGUNDO APELLIDO:", medicos[index].SegundoApellido);
    var nuevoTelefono = prompt("INGRESE EL NUEVO TELEFONO:", medicos[index].Telefono);
    var nuevoCorreo = prompt("INGRESE EL NUEVO CORREO:", medicos[index].Correo);
    var nuevoEspecialidad = prompt("INGRESE LA NUEVA ESPECIALIDAD:", medicos[index].Especialidad);
    // Actualizar los datos del médico en el array
    if (nuevoTipoDocu !== null && nuevoNumeroDocu !== null && nuevoPrimerNom !== null && nuevoSegundoNom !== null && nuevoPrimerApe !== null && nuevoSegundoApe !== null && nuevoTelefono !== null && nuevoCorreo !== null && nuevoEspecialidad !== null) {
        medicos[index].TipoDocumento = nuevoTipoDocu;
        medicos[index].NumeroDocumento = nuevoNumeroDocu;
        medicos[index].PrimerNombre = nuevoPrimerNom;
        medicos[index].SegundoNombre = nuevoSegundoNom;
        medicos[index].PrimerApellido = nuevoPrimerApe;
        medicos[index].SegundoApellido = nuevoSegundoApe;
        medicos[index].Telefono = nuevoTelefono;
        medicos[index].Correo = nuevoCorreo;
        medicos[index].Especialidad = nuevoEspecialidad;

        // Actualizar la tabla
        actualizarTabla();
    }
}

// Función para deshabilitar un médico
function deshabilitarMedico(index) {
    // Eliminar el médico del array
    medicos.splice(index, 1);

    // Actualizar la tabla
    actualizarTabla();
}
