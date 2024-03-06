function buscarIngresoPorFiltro(filtro) {
    $.ajax({
        url : "http://localhost:8080/api/v1/Ingreso/busquedafiltro/" + filtro,
    type: "GET",
    success: function (result) {
        var cuerpoTabla = document.getElementById("cuerpoTabla");
        cuerpoTabla.innerHTML = "";
        for (var i = 0; i < result.length; i++) {
            var trRegistro = document.createElement("tr");
            trRegistro.innerHTML = `
                <td>${result[i]["idIngreso"]}</td>
                <td class="text-center align-middle">${result[i]["habitacion"]}</td>
                <td class="text-center align-middle">${result[i]["cama"]}</td>
                <td class="text-center align-middle">${result[i]["paciente"]["primerNombre"]}</td>
                <td class="text-center align-middle">${result[i]["medico"]["primerNombre"]}</td>
                <td class="text-center align-middle">${result[i]["fechaIngreso"]}</td>
                <td class="text-center align-middle">${result[i]["fechaSalida"]}</td>`;
                if (result[i]["estado"]=="H") {
                    trRegistro.innerHTML +=` <td class="text-center align-middle">Habilitado</td>`
                }else{
                    trRegistro.innerHTML +=` <td class="text-center align-middle">Deshabilitado</td>`
                }
                trRegistro.innerHTML +=`
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
                    <td class="text-center align-middle">${result[i]["paciente"]["primerNombre"]}</td>
                    <td class="text-center align-middle">${result[i]["medico"]["primerNombre"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaIngreso"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaSalida"]}</td>`;
                    if (result[i]["estado"]=="H") {
                        trRegistro.innerHTML +=` <td class="text-center align-middle">Habilitado</td>`
                    }else{
                        trRegistro.innerHTML +=` <td class="text-center align-middle">Deshabilitado</td>`
                    }
                    trRegistro.innerHTML +=`
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
    var textoimprimir = "";
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
        urlLocal = url + idIngreso;
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

// Función habitacion

function validarCampos() {
    var habitacion = document.getElementById("habitacion");
    return validarHabitacion(habitacion);
}

// Función para validar 

function validarHabitacion(cuadroNumero) {
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


// Función cama

function validarCamposCama() {
    var cama = document.getElementById("cama");
    return validarCama(cama);
}

// Función para validar 
function validarCama(cuadroNumero) {
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


// Función paciente

function validarPaciente() {
    var paciente = document.getElementById("paciente");
    return validarPaciente(paciente);
}

// Función para validar 
function validarPaciente(cuadroNumero) {
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


// Función medico

function validarmMedico() {
    var medico = document.getElementById("medico");
    return validarMedico(medico);
}

// Función para validar 
function validarMedico(cuadroNumero) {
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


// Función fechaIngreso

function validarCamposFechaIngreso() {
    var fechaIngreso = document.getElementById("fechaIngreso");
    return validarFechaIngreso(fechaIngreso);
}

// Función para validar 
function validarFechaIngreso(cuadroNumero) {
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


// Función fechaSalida

function validarCamposFechaSalida() {
    var fechaSalida = document.getElementById("fechaSalida");
    return validarFechaSalida(fechaSalida);
}

// Función para validar 
function validarFechaSalida(cuadroNumero) {
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
function limpiar() {

    document.getElementById("habitacion").value = "";
    document.getElementById("habitacion").className="form-control";
    document.getElementById("cama").value = "";
    document.getElementById("cama").className="form-control";
    document.getElementById("paciente").value = "";
    document.getElementById("paciente").className="form-control";
    document.getElementById("medico").value = "";
    document.getElementById("medico").className="form-control";
    // Obtener la fecha actual
    var today = new Date();

    // Formatear la fecha como "YYYY-MM-DD"
    var formattedDate = today.toISOString().substr(0, 10);

    // Establecer la fecha actual como el valor predeterminado del campo de entrada de fecha
    document.getElementById("fechaIngreso").value = formattedDate;
    document.getElementById("fechaIngreso").className="form-control";
    document.getElementById("fechaSalida").value = "";
    document.getElementById("fechaSalida").className="form-control";
    document.getElementById("Estado").value = "";
    document.getElementById("Estado").className="form-control";

}
var idIngreso = "";
// Asociar eventos de clic a los iconos dentro de la tabla
$(document).on("click", ".editar", function () {
    idIngreso = $(this).data("id");
    limpiar();
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
    var idIngreso = $(this).data("id");
    $.ajax({
        url: url + idIngreso,
        type: "DELETE",
        success: function(){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Cambio de estado exitoso",
                showConfirmButton: false,
                timer: 1500
            });
            listarIngreso(); // Actualiza la lista de pacientes en el front-end
        }
    });
});

$(document).on("click", ".eliminar", function () {
    var idIngreso = $(this).data("id");
    $.ajax({
        url: url + "eliminarPermanente/" + idIngreso,
        type: "DELETE",
        success: function (eliminarPermanente) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registro Eliminado",
                showConfirmButton: false,
                timer: 1500
            });
            listarIngreso()
        }
    })
});

// Llamar a la función para listar médicos al cargar la página
$(document).ready(function () {
    listarIngreso();
});
function actualizarlistarIngreso() {
    listarIngreso();
}