function buscarMedicoPorFiltro(filtro) {
    if (filtro=== '') {
        listarMedico(); // Mostrar todos los médicos si estado es vacío
    }else{
        $.ajax({
            url: "http://localhost:8080/api/v1/Medico/busquedafiltro/" + filtro,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";
    
                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idMedico"]}</td>
                        <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                        <td class="text-center align-middle">${result[i]["primerNombre"]}</td>
                        <td class="text-center align-middle">${result[i]["segundoNombre"]}</td>
                        <td class="text-center align-middle">${result[i]["primerApellido"]}</td>
                        <td class="text-center align-middle">${result[i]["segundoApellido"]}</td>
                        <td class="text-center align-middle">${result[i]["celular"]}</td>
                        <td class="text-center align-middle">${result[i]["correo"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarMedicoBandera=false;" data-id="${result[i]["idMedico"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idMedico"]})" data-id="${result[i]["idMedico"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idMedico"]}"></i>
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

function buscarMedicoPorEstado(estado) {
    if (estado === '') {
        listarMedico(); // Mostrar todos los médicos si estado es vacío
    } else if (estado === 'H') {
        // Mostrar solo los médicos habilitados si estado es 'H'
        $.ajax({
            url: "http://localhost:8080/api/v1/Medico/busquedafiltroestado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idMedico"]}</td>
                        <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                        <td class="text-center align-middle">${result[i]["primerNombre"]}</td>
                        <td class="text-center align-middle">${result[i]["segundoNombre"]}</td>
                        <td class="text-center align-middle">${result[i]["primerApellido"]}</td>
                        <td class="text-center align-middle">${result[i]["segundoApellido"]}</td>
                        <td class="text-center align-middle">${result[i]["celular"]}</td>
                        <td class="text-center align-middle">${result[i]["correo"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarMedicoBandera=false;" data-id="${result[i]["idMedico"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idMedico"]})" data-id="${result[i]["idMedico"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idMedico"]}"></i>
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
            url: "http://localhost:8080/api/v1/Medico/busquedafiltroestado/" + estado,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";

                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idMedico"]}</td>
                        <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                        <td class="text-center align-middle">${result[i]["primerNombre"]}</td>
                        <td class="text-center align-middle">${result[i]["segundoNombre"]}</td>
                        <td class="text-center align-middle">${result[i]["primerApellido"]}</td>
                        <td class="text-center align-middle">${result[i]["segundoApellido"]}</td>
                        <td class="text-center align-middle">${result[i]["celular"]}</td>
                        <td class="text-center align-middle">${result[i]["correo"]}</td>
                        <td class="text-center align-middle">${result[i]["estado"]}</td>
                        <td class="text-center align-middle">
                            <i class="fas fa-edit editar"  onclick="registrarMedicoBandera=false;" data-id="${result[i]["idMedico"]}"></i>
                            <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idMedico"]})" data-id="${result[i]["idMedico"]}"></i>
                            <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idMedico"]}"></i>
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






// URL de la API
var url = "http://localhost:8080/api/v1/Medico/";

// Función para listar los médicos
function listarMedico() {
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                    <td>${result[i]["idMedico"]}</td>
                    <td class="text-center align-middle">${result[i]["documentoIdentidad"]}</td>
                    <td class="text-center align-middle">${result[i]["primerNombre"]}</td>
                    <td class="text-center align-middle">${result[i]["segundoNombre"]}</td>
                    <td class="text-center align-middle">${result[i]["primerApellido"]}</td>
                    <td class="text-center align-middle">${result[i]["segundoApellido"]}</td>
                    <td class="text-center align-middle">${result[i]["celular"]}</td>
                    <td class="text-center align-middle">${result[i]["correo"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarMedicoBandera=false;" data-id="${result[i]["idMedico"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" onclick="cambiarEstado(${result[i]["idMedico"]})" data-id="${result[i]["idMedico"]}"></i>
                        <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idMedico"]}"></i>
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

var registrarMedicoBandera = true;

// Función para registrar un médico
function registrarMedico() {
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
            title: "Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
        return; // Salir de la función si algún campo está vacío
    }

    var forData = {
        "documentoIdentidad": documentoIdentidad.value,
        "primerNombre": primerNombre.value,
        "segundoNombre": document.getElementById("segundoNombre").value,
        "primerApellido": primerApellido.value,
        "segundoApellido": document.getElementById("segundoApellido").value,
        "Celular": Celular.value,
        "Correo": Correo.value,
        "Estado": Estado.value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarMedicoBandera == true) {
        metodo = "POST";
        urlLocal = url;

    } else {
        metodo = "PUT";
        urlLocal = url + idMedico;
    }

    $.ajax({
        url: urlLocal,
        type: metodo,
        data: forData,
        success: function (result) {
            textoimprimir;
            $('#exampleModal').modal('hide');
            listarMedico();

            textoimprimir = Swal.fire({
                title: "LISTO",
                text: "Felicidades, Guardado con éxito",
                icon: "success"
            });
        },
        error: function (error) {
            textoimprimir = Swal.fire({
                title: "ERROR",
                text: responseText,
                icon: "error"
            });
        }
    });
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

    if (valor.length < 1 || valor.length > 155) {
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




// Función para limpiar campos del formulario
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
}

var idMedico = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    limpiar();
    idMedico = $(this).data("id");

    $.ajax({
        url: url + idMedico,
        type: "GET",
        success: function (medico) {
            document.getElementById("documentoIdentidad").value = medico.documentoIdentidad;
            document.getElementById("primerNombre").value = medico.primerNombre;
            document.getElementById("segundoNombre").value = medico.segundoNombre;
            document.getElementById("primerApellido").value = medico.primerApellido;
            document.getElementById("segundoApellido").value = medico.segundoApellido;
            document.getElementById("Celular").value = medico.celular;
            document.getElementById("Correo").value = medico.correo;
            document.getElementById("Estado").value = medico.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del médico: " + error.statusText);
        }
    });
});

$(document).on("click", ".cambiarEstado", function () {
    var idMedico = $(this).data("id");
    $.ajax({
        url: url + idMedico,
        type: "DELETE",
        success: function () {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            listarMedico(); // Actualiza la lista de pacientes en el front-end
        }
    });
});



$(document).on("click", ".eliminar", function () {
    // Obtener el ID del médico desde el atributo data del elemento clicado
    var idMedico = $(this).data("id");

    // Mostrar un cuadro de diálogo para confirmar la eliminación
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Deseas eliminar este medico?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        // Si el usuario confirma la eliminación, proceder con la solicitud AJAX
        if (result.isConfirmed) {
            $.ajax({
                url: url + "eliminarPermanente/" + idMedico,
                type: "DELETE",
                success: function (eliminarPermanente) {
                    // Mostrar un mensaje de éxito
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro Eliminado",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // Actualizar la lista de médicos después de eliminar
                    listarMedico();
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
    listarMedico();
});
function actualizarlistarMedico() {
    listarMedico();
}

