//se almacena la url de la API
var url = "http://localhost:8080/api/v1/Ingreso/";
function listarIngreso() {
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
                    <td>${result[i]["idIngreso"]}</td>
                    <td class="text-center align-middle">${result[i]["habitacion"]}</td>
                    <td class="text-center align-middle">${result[i]["cama"]}</td>
                    <td>${result[i]["paciente"]["primerNombre"]}</td>
                    <td>${result[i]["medico"]["primerNombre"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaIngreso"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaSalida"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                    <i class="fas fa-edit editar"  onclick="registrarIngresoBandera=false;" data-id="${result[i]["idIngreso"]}"></i>
                    <i class="fas fa-user-slash cambiarEstado" data-id="${result[i]["idIngreso"]}"></i>
                    <i class="fas fa-trash-alt eliminar" data-id="${result[i]["idIngreso"]}"></i>
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

var registrarIngresoBandera = true;
//se almacenan los valores
function registrarIngreso() {
    let forData = {
        "habitacion": document.getElementById("habitacion").value,
        "cama": document.getElementById("cama").value,
        "paciente": document.getElementById("paciente").value,
        "medico": document.getElementById("medico").value,
        "fechaIngreso": document.getElementById("fechaIngreso").value,
        "fechaSalida": document.getElementById("fechaSalida").value,
        "Estado": document.getElementById("Estado").value,
    };
    var metodo = "";
    var urlLocal = "";
    var textoimprimir ="";
    if (registrarIngresoBandera == true) {
        metodo = "POST";
        urlLocal = url;
        textoimprimir = Swal.fire({
            title: "LISTO",
            text: "Felicidades, Registrado con éxito",
            icon: "success"
        });
    } else {
        metodo = "PUT";
        urlLocal = url+ idIngreso;
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
                listarIngreso();
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
    var cama = document.getElementById("cama");
    return validarcama(cama);
}

// Función para validar el documento de identidad
function validarcama(cuadroNumero) {
    var valor = cuadroNumero.value;
    var valido = true;

    if ( valor.length >11) {
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

    document.getElementById("habitacion").value = "";
    document.getElementById("cama").value = "";
    document.getElementById("paciente").value = "";
    document.getElementById("medico").value = "";
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("fechaSalida").value = "";
    document.getElementById("Estado").value = "";

}
var idIngreso = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    idIngreso = $(this).data("id");

    $.ajax({
        url: url + idIngreso,
        type: "GET",
        success: function (ingreso) {
            document.getElementById("habitacion").value = ingreso.habitacion;
            document.getElementById("cama").value = ingreso.cama;
            document.getElementById("paciente").value = ingreso.paciente.idPaciente;
            document.getElementById("medico").value = ingreso.medico.idMedico;
            document.getElementById("fechaIngreso").value = ingreso.fechaIngreso;
            document.getElementById("fechaSalida").value = ingreso.fechaSalida;
            document.getElementById("Estado").value = ingreso.estado;
            $('#exampleModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del Ingreso: " + error.statusText);
        }
    });
});

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
    listarIngreso();
});
