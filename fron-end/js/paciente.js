

function buscarPacientePorFiltro(filtro) {
    $.ajax({
        url : "http://localhost:8080/api/v1/Paciente/busquedafiltro/" + filtro,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                <td>${result[i]["idPaciente"]}</td>
                <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                <td class="text-center align-middle">${result[i]["primerNombre"]}</td>
                <td class="text-center align-middle">${result[i]["segundoNombre"]}</td>
                <td class="text-center align-middle">${result[i]["primerApellido"]}</td>
                <td class="text-center align-middle">${result[i]["segundoApellido"]}</td>
                <td class="text-center align-middle">${result[i]["celular"]}</td>
                <td class="text-center align-middle">${result[i]["correo"]}</td>`;
                if (result[i]["estado"]=="H") {
                    trRegistro.innerHTML +=` <td class="text-center align-middle">Habilitado</td>`
                }else{
                    trRegistro.innerHTML +=` <td class="text-center align-middle">Deshabilitado</td>`
                }
                trRegistro.innerHTML +=`
                <td class="text-center align-middle">${result[i]["nombrePersonaContacto"]}</td>
                <td class="text-center align-middle">${result[i]["telefonoPersonaContacto"]}</td>
                <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarPacienteBandera=false;" data-id="${result[i]["idPaciente"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" data-id="${result[i]["idPaciente"]}"></i>
                        <i class="fas fa-trash-alt eliminar"  data-id="${result[i]["idPaciente"]}"></i>
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
                <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                <td class="text-center align-middle">${result[i]["primerNombre"]}</td>
                <td class="text-center align-middle">${result[i]["segundoNombre"]}</td>
                <td class="text-center align-middle">${result[i]["primerApellido"]}</td>
                <td class="text-center align-middle">${result[i]["segundoApellido"]}</td>
                <td class="text-center align-middle">${result[i]["celular"]}</td>
                <td class="text-center align-middle">${result[i]["correo"]}</td>`;
                if (result[i]["estado"]=="H") {
                    trRegistro.innerHTML +=` <td class="text-center align-middle">Habilitado</td>`
                }else{
                    trRegistro.innerHTML +=` <td class="text-center align-middle">Deshabilitado</td>`
                }
                trRegistro.innerHTML +=`
                <td class="text-center align-middle">${result[i]["nombrePersonaContacto"]}</td>
                <td class="text-center align-middle">${result[i]["telefonoPersonaContacto"]}</td>
                <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarPacienteBandera=false;" data-id="${result[i]["idPaciente"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" data-id="${result[i]["idPaciente"]}"></i>
                        <i class="fas fa-trash-alt eliminar"  data-id="${result[i]["idPaciente"]}"></i>
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





// Función para validar campos
// Función Documento Identidad
function validarCampos() {
    var documentoIdentidad = document.getElementById("documentoIdentidad");
    return validarDocumentoIdentidad(documentoIdentidad);
}

// Función para validar el documento de identidad
function validarDocumentoIdentidad(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 5 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función primerNombre

function validarCamposNombre() {
    var primerNombre = document.getElementById("primerNombre");
    return validarPrimerNombre(primerNombre);
}

// Función para validar 

function validarPrimerNombre(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función primerApellido

function validarCamposApellido() {
    var primerApellido = document.getElementById("primerApellido");
    return validarprimerApellido(primerApellido);
}

// Función para validar 
function validarprimerApellido(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 11) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función Telefono

function validarCamposTelefono() {
    var Celular = document.getElementById("Celular");
    return validarCelular(Celular);
}

// Función para validar 
function validarCelular(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función Correo

function validarCamposCorreo() {
    var Correo = document.getElementById("Correo");
    return validarCorreo(Correo);
}

// Función para validar 
function validarCorreo(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 150) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función Estado

function validarCamposEstado() {
    var Estado = document.getElementById("Estado");
    return validarEstado(Estado);
}

// Función para validar 
function validarEstado(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función Nombre familiar

function validarCamposNombreFamiliar() {
    var nombrePersonaContacto = document.getElementById("nombrePersonaContacto");
    return validarNombrePersonaContacto(nombrePersonaContacto);
}

// Función para validar 
function validarNombrePersonaContacto(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}


// Función Telefono familiar

function validarCamposTelefonoFamiliar() {
    var telefonoPersonaContacto = document.getElementById("telefonoPersonaContacto");
    return validarTelefonoPersonaContacto(telefonoPersonaContacto);
}

// Función para validar 
function validarNombrePersonaContacto(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if (valor.length < 1 || valor.length > 15) {
        valido = false;
    }

    if (valido) {
        cuadroNumero.className = "form-control is-valid";
    } else {
        cuadroNumero.className = "form-control is-invalid";
    }

    return valido;
}

function limpiar() {

    document.getElementById("documentoIdentidad").value = "";
    document.getElementById("documentoIdentidad").className = "form-control";
    document.getElementById("primerNombre").value = "";
    document.getElementById("primerNombre").className = "form-control";
    document.getElementById("segundoNombre").value = "";
    document.getElementById("primerApellido").value = "";
    document.getElementById("primerApellido").className = "form-control";
    document.getElementById("segundoApellido").value = "";
    document.getElementById("Celular").value = "";
    document.getElementById("Celular").className = "form-control";
    document.getElementById("Correo").value = "";
    document.getElementById("Correo").className = "form-control";
    document.getElementById("Estado").value = "";
    document.getElementById("Estado").className = "form-control";
    document.getElementById("nombrePersonaContacto").value = "";
    document.getElementById("nombrePersonaContacto").className = "form-control";
    document.getElementById("telefonoPersonaContacto").value = "";
    document.getElementById("telefonoPersonaContacto").className = "form-control";

}
var idPaciente = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    limpiar();
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
    var idPaciente = $(this).data("id");
    $.ajax({
        url: url + idPaciente,
        type: "DELETE",
        success: function(){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            listarPaciente(); // Actualiza la lista de pacientes en el front-end
        }
    });
});

$(document).on("click", ".eliminar", function () {
    var idPaciente = $(this).data("id");
    $.ajax({
        url: url + "eliminarPermanente/" + idPaciente,
        type: "DELETE",
        success: function (eliminarPermanente) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registro Eliminado",
                showConfirmButton: false,
                timer: 1500
            });
            listarPaciente()
        }
    })
});

// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarPaciente();
});
function actualizarListaPacientes() {
    listarPaciente();
}