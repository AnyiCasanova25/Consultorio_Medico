//se almacena la url de la API
var url = "http://localhost:8080/api/v1/Ingreso/";
function listarIngreso() {
    //metodo para alistar los medicos
    //se crea la peticion AJAX
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            //success: funcion que se ejecuta 
            //cuando la peticion tiene exito
            console.log(result);
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
                    <td>${result[i]["paciente"]}</td>
                    <td>${result[i]["medico"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaIngreso"]}</td>
                    <td class="text-center align-middle">${result[i]["fechaSalida"]}</td>
                    <td class="text-center align-middle">${result[i]["estado"]}</td>
                    <td class="text-center align-middle">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-user-slash"></i>
                        <i class="fas fa-trash-alt"></i>
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

//se almacenan los valores
function registrarIngreso() {
    let forData = {
        "habitacion": document.getElementById("habitacion").value,
        "cama": document.getElementById("cama").value,
        "paciente": document.getElementById("paciente").value,
        "medico": document.getElementById("medico").value,
        "fechaIngreso": document.getElementById("fechaIngreso").value,
        "fechaSalida": document.getElementById("fechaSalida").value,
        "Estado": document.getElementById("estado").value,
    };
    if (validarCampos()) {
        //se ejecuta la peticion
        $.ajax({

            url: url,
            type: "POST",
            data: forData,

            success: function (result) {
                Swal.fire({
                    title: "LISTO",
                    text: "Felicidades registrado con exito",
                    icon: "success"
                });
                $('#exampleModal').modal('hide');
                listarIngreso();
            },
            error: function (error) {
                //error
                alert("Error al guardar", error);
            }
        });
    } else {
        Swal.fire({
            title: "Error!",
            text: "Llene todos los campos correctamente!",
            icon: "error"
        });
    }
}

//Validar campo de documento de identidad paciente
function validarCampos() {
    var cama = document.getElementById("cama");
    return validarCama(cama);
}

function validarCama(cuadroNumero) {



    var valor = cuadroNumero.value;
    var valido = true;
    if (valor.length <= 1 || valor.length > 11) {
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

    document.getElementById("habitacion").value = "";
    document.getElementById("cama").value = "";
    document.getElementById("paciente").value = "";
    document.getElementById("medico").value = "";
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("fechaSalida").value = "";
    document.getElementById("estado").value = "";

}
