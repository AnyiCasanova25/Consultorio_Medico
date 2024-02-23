//se almacena la url de la API
var url = "http://localhost:8080/api/v1/Paciente/";
function listarPaciente() {
    //metodo para alistar los medicos
    //se crea la peticion AJAX
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            //se crea un objeto que contenga
            //el cuerpo de la tabla
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            //se limpia el cuerpo de la tabla
            cuerpoTabla.innerHTML = "";
            //Se hace un ciclo que recorra 
            //el arreglo con los datos
            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                <td>${result[i]["idPaciente"]}</td>
                <td>${result[i]["documentoIdentidad"]}</td>
                <td>${result[i]["primerNombre"]}</td>
                <td>${result[i]["segundoNombre"]}</td>
                <td>${result[i]["primerApellido"]}</td>
                <td>${result[i]["segundoApellido"]}</td>
                <td>${result[i]["celular"]}</td>
                <td>${result[i]["correo"]}</td>
                <td class="text-center align-middle">${result[i]["estado"]}</td>
                <td>${result[i]["nombrePersonaContacto"]}</td>
                <td>${result[i]["telefonoPersonaContacto"]}</td>
                <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarPacienteBandera=false;" data-id="${result[i]["idPaciente"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" data-id="${result[i]["idPaciente"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idPaciente"]}"></i>
                    </td>
            `;
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("Error en la petición: " + error);
        }
    });
}

var registrarPacienteBandera = true;

//se almacenan los valores
function registrarPaciente() {
    let forData = {
        "documentoIdentidad": document.getElementById("documentoIdentidad").value,
        "primerNombre": document.getElementById("primerNombre").value,
        "segundoNombre": document.getElementById("segundoNombre").value,
        "primerApellido": document.getElementById("primerApellido").value,
        "segundoApellido": document.getElementById("segundoApellido").value,
        "Celular": document.getElementById("Celular").value,
        "Correo": document.getElementById("Correo").value,
        "Estado": document.getElementById("Estado").value,
        "nombrePersonaContacto": document.getElementById("nombrePersonaContacto").value,
        "telefonoPersonaContacto": document.getElementById("telefonoPersonaContacto").value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarPacienteBandera == true) {
        metodo = "POST";
        urlLocal = url;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Registrado con éxito",
            icon: "success"
        });
    } else {
        metodo = "PUT";
        urlLocal = url + idPaciente;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Guardado con éxito",
            icon: "success"
        });
    }


    if (validarCampos()) {
        $.ajax({
            url: urlLocal,
            type: metodo,
            data: forData,
            success: function (result) {
                textoimprimir;
                $('#exampleModal').modal('hide');
                listarPaciente();
            },
            error: function (error) {
                if (error.responseJSON && error.responseJSON.message) {
                    alert("Error al guardar: " + error.responseJSON.message);
                } else {
                    alert("Error al guardar: " + error.statusText);
                }
            }
        });
    } else {
        Swal.fire({
            title: "Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
    }
}


function validarCampos() {
    var documentoIdentidad = document.getElementById("documentoIdentidad");
    return validarDocumentoIdentidad(documentoIdentidad);
}

function validarDocumentoIdentidad(cuadroNumero) {



    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length < 5 || valor.length > 11) {
        valido = false;
    }


    if (valido) {
        //cuadro de texto cumple
        //se modifica la clase del cuadro de texto
        cuadroNumero.className = "form-control is-valid";
    } else {
        //cuadro de texto no cumple
        cuadroNumero.className = "form-control is-invalid"
    }
    return valido
}

function limpiar() {

    document.getElementById("documentoIdentidad").value = "";
    document.getElementById("primerNombre").value = "";
    document.getElementById("segundoNombre").value = "";
    document.getElementById("primerApellido").value = "";
    document.getElementById("segundoApellido").value = "";
    document.getElementById("Celular").value = "";
    document.getElementById("Correo").value = "";
    document.getElementById("Estado").value = "";
    document.getElementById("nombrePersonaContacto").value = "";
    document.getElementById("telefonoPersonaContacto").value = "";

}
var idPaciente = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    idPaciente = $(this).data("id");

    $.ajax({
        url: url + idPaciente,
        type: "GET",
        success: function (paciente) {
            document.getElementById("documentoIdentidad").value = paciente.documentoIdentidad;
            document.getElementById("primerNombre").value = paciente.primerNombre;
            document.getElementById("segundoNombre").value = paciente.segundoNombre;
            document.getElementById("primerApellido").value = paciente.primerApellido;
            document.getElementById("segundoApellido").value = paciente.segundoApellido;
            document.getElementById("Celular").value = paciente.celular;
            document.getElementById("Correo").value = paciente.correo;
            document.getElementById("Estado").value = paciente.estado;
            document.getElementById("nombrePersonaContacto").value = paciente.nombrePersonaContacto;
            document.getElementById("telefonoPersonaContacto").value = paciente.telefonoPersonaContacto;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del médico: " + error.statusText);
        }
    });
});

$(document).on("click", ".cambiarEstado", function () {
    var idMedico = $(this).data("id");

    if (confirm) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Medico deshabilitado",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

$(document).on("click", ".eliminar", function () {
    var idMedico = $(this).data("id");



    if (confirm) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registro eliminado :)",
            showConfirmButton: false,
            timer: 1500
        });
    }
});

// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarPaciente();
});
