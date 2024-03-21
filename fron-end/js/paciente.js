

function buscarPacientePorFiltro(filtro) {
    if (filtro === '') {
        listarPaciente(); // Mostrar todos los médicos si estado es vacío
    } else {
        $.ajax({
            url: "http://localhost:8080/api/v1/Paciente/busquedafiltro/" + filtro,
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
                <td class="text-center align-middle">${result[i]["correo"]}</td>
                <td class="text-center align-middle">${result[i]["estado"]}</td>
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
}

function buscarPacientePorEstado(estado) {
    if (estado === '') {
        listarPaciente(); // Mostrar todos los médicos si estado es vacío
    } else if (estado === 'H') {
        // Mostrar solo los médicos habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/Paciente/busquedafiltroestado/" + estado,
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
                    <td class="text-center align-middle">${result[i]["correo"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
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
    } else {
        // Mostrar solo los médicos deshabilitados si no es vacío ni 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/Paciente/busquedafiltroestado/" + estado,
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
                    <td class="text-center align-middle">${result[i]["correo"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
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
                <td class="text-center align-middle">${result[i]["correo"]}</td>
                <td class="text-center align-middle">${result[i]["estado"]}</td>
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
    var documentoIdentidad = document.getElementById("documentoIdentidad");
    var primerNombre = document.getElementById("primerNombre");
    var primerApellido = document.getElementById("primerApellido");
    var Celular = document.getElementById("Celular");
    var Correo = document.getElementById("Correo");
    var Estado = document.getElementById("Estado");

     // Verificar si algún campo obligatorio está vacío
     if (!validarDocumentoIdentidad(documentoIdentidad) ||
     !validarPrimerNombre(primerNombre) ||
     !validarprimerApellido(primerApellido) ||
     !validarCelular(Celular) ||
     !validarCorreo(Correo) ||
     !validarEstado(Estado)) {
     // Mostrar una alerta indicando que todos los campos son obligatorios
     Swal.fire({
         title: "¡Error!",
         text: "¡Llene todos los campos correctamente!",
         icon: "error"
     });
     return; // Salir de la función si algún campo está vacío
 }

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
            success: function (response) {
                Swal.fire({
                    title: "Éxito",
                    text: "Felicidades, Guardado con éxito",
                    icon: "success"
                }).then(function () {
                    // Aquí puedes agregar más acciones después del registro exitoso
                    $('#exampleModal').modal('hide');
                    listarPaciente();
                });
            },
            error: function (xhr, status, error) {
                Swal.fire({
                    title: "Error",
                    text: "¡El número de documento ya se encuentra registrado!",
                    icon: "error"
                });
            }
        });
    } else {
        Swal.fire({
            title: "Error",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
    }
};





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
            alert("Error al obtener los datos del paciente: " + error.statusText);
        }
    });
});

$(document).on("click", ".cambiarEstado", function () {
    var idPaciente = $(this).data("id");
    $.ajax({
        url: url + idPaciente,
        type: "DELETE",
        success: function () {
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
    // Obtener el ID del paciente desde el atributo data del elemento clicado
    var idPaciente = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar este paciente?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idPaciente,
                type: "DELETE",
                success: function () {
                    // Mostrar un mensaje de éxito
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro Eliminado",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // Actualizar la lista de pacientes después de la eliminación
                    listarPaciente();
                },
                error: function (xhr, status, error) {
                    // Manejo de errores
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El registro tiene un ingreso.'
                    });
                }
            });
        }
    });
});


// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarPaciente();
});
function actualizarListaPacientes() {
    listarPaciente();
}