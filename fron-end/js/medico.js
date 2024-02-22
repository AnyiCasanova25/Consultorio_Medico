// URL de la API
var url = "http://localhost:8080/api/v1/Medico/";

// Función para listar los médicos
function listarMedico() {
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            //success: funcion que se ejecuta 
            //cuando la peticion tiene exito
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

    if (validarCampos()) {
        $.ajax({
            url: url,
            type: "POST",
            data: forData,
            success: function (result) {
                Swal.fire({
                    title: "LISTO",
                    text: "Felicidades, registrado con éxito",
                    icon: "success"
                });
                $('#exampleModal').modal('hide');
                listarMedico();
            },
            error: function (error) {
                alert("Error al guardar: " + error);
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