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
                    <td>${result[i]["documentoIdentidad"]}</td>
                    <td>${result[i]["primerNombre"]}</td>
                    <td>${result[i]["segundoNombre"]}</td>
                    <td>${result[i]["primerApellido"]}</td>
                    <td>${result[i]["segundoApellido"]}</td>
                    <td>${result[i]["celular"]}</td>
                    <td>${result[i]["correo"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                        <i class="fas fa-edit editar"  onclick="registrarMedicoBandera=false;" data-id="${result[i]["idMedico"]}"></i>
                        <i class="fas fa-user-slash cambiarEstado" data-id="${result[i]["idMedico"]}"></i>
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
    var forData = {
        "documentoIdentidad": document.getElementById("documentoIdentidad").value,
        "primerNombre": document.getElementById("primerNombre").value,
        "segundoNombre": document.getElementById("segundoNombre").value,
        "primerApellido": document.getElementById("primerApellido").value,
        "segundoApellido": document.getElementById("segundoApellido").value,
        "Celular": document.getElementById("Celular").value,
        "Correo": document.getElementById("Correo").value,
        "Estado": document.getElementById("Estado").value,
    };
    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";
    if (registrarMedicoBandera == true) {
        metodo = "POST";
        urlLocal = url;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Registrado con éxito",
            icon: "success"
        });
    } else {
        metodo = "PUT";
        urlLocal = url + idMedico;
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
                listarMedico();
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

// Función para limpiar campos del formulario
function limpiar() {
    document.getElementById("documentoIdentidad").value = "";
    document.getElementById("primerNombre").value = "";
    document.getElementById("segundoNombre").value = "";
    document.getElementById("primerApellido").value = "";
    document.getElementById("segundoApellido").value = "";
    document.getElementById("Celular").value = "";
    document.getElementById("Correo").value = "";
    document.getElementById("Estado").value = "";
}
var idMedico = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
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

// Funcion para canbiar el estado

$(document).on("click", ".cambiarEstado", function () {
    idMedico = $(this).data("id");

    if (confirm) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Cambio de estado exitoso",
            showConfirmButton: false,
            timer: 1500
        });
    }
});


// Función para eliminar un médico

$(document).on("click", ".eliminar", function () {
    idMedico = $(this).data("id");

    $.ajax({
        urlLocal: url + idMedico,
        type: "DELETE",
                success: function () {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro eliminado :)",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    listarMedico(); // Vuelve a listar los médicos después de eliminar uno
                },
                error: function (error) {
                    console.error("Error al eliminar el médico: " + error.statusText);
                    Swal.fire({
                        title: "Error",
                        text: "Error al eliminar el médico",
                        icon: "error"
                    });
                }
    });
});



// $(document).on("click", ".eliminar", function () {
//     idMedico = $(this).data("id");



//     if (confirm) {
//         Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Registro eliminado :)",
//             showConfirmButton: false,
//             timer: 1500
//         });
//     }
// });

// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarMedico();
});

