//se almacena la url de la API
var url = "http://localhost:8080/api/v1/Paciente/";
function listarPaciente() {
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
                //se crea una etiqueta tr por
                //cada registro
                var trRegistro = document.createElement("tr");
                let celdaId = document.createElement("td");

                //creamos un td por cada campo de registro

                let celdaDocumentoIdentidad = document.createElement("td");
                let celdaPrimerNombre = document.createElement("td");
                let celdaSegundoNombre = document.createElement("td");
                let celdaPrimerApellido = document.createElement("td");
                let celdaSegundoApellido = document.createElement("td");
                let celdaCelular = document.createElement("td");
                let celdaCorreo = document.createElement("td");
                let celdaEstado = document.createElement("td");
                let celdaNombrePersonaContacto = document.createElement("td");
                let celdaNumeroPersonaContacto = document.createElement("td");
                celdaId.innerText = result[i]["idMedico"];

                //se agrega la celda al registro una linea por cada campo 

                trRegistro.appendChild(celdaId);
                trRegistro.appendChild(celdaDocumentoIdentidad);
                trRegistro.appendChild(celdaPrimerNombre);
                trRegistro.appendChild(celdaSegundoNombre);
                trRegistro.appendChild(celdaPrimerApellido);
                trRegistro.appendChild(celdaSegundoApellido);
                trRegistro.appendChild(celdaCelular);
                trRegistro.appendChild(celdaCorreo);
                trRegistro.appendChild(celdaEstado);
                trRegistro.appendChild(celdaNombrePersonaContacto);
                trRegistro.appendChild(celdaNumeroPersonaContacto);


                //se agrega el registro en la tabla 

                cuerpoTabla.appendChild(trRegistro);
                celdaDocumentoIdentidad.innerText = result[i]["documentoIdentidad"];
                celdaPrimerNombre.innerText = result[i]["primerNombre"];
                celdaSegundoNombre.innerText = result[i]["segundoNombre"];
                celdaPrimerApellido.innerText = result[i]["primerApellido"];
                celdaSegundoApellido.innerText = result[i]["segundoApellido"];
                celdaCelular.innerText = result[i]["Celular"];
                celdaCorreo.innerText = result[i]["Correo"];
                celdaEstado.innerText = result[i]["Estado"];
                celdaNombrePersonaContacto.innerText = result[i]["nombrePersonaContacto"];
                celdaNumeroPersonaContacto.innerText = result[i]["telefonoPersonaContacto"];



            }
        },
        error: function (error) {
            //error: funcion que se ejecuta 
            //cuando la peticion tiene un error
            alert("Error en la peticion ${error}");

        }

    });
}

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
    if (validarCampos()) {
        //se ejecuta la peticion
        $.ajax({

            url: url,
            type: "POST",
            data: forData,

            success: function (result) {
                //
                alert("Se guardo correctamente");
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


function validarCampos() {
    var documentoIdentidad = document.documentoIdentidad("documentoIdentidad");
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
    document.getElementById("segundo_apellido").value = "";
    document.getElementById("Celular").value = "";
    document.getElementById("Correo").value = "";
    document.getElementById("Estado").value = "";
    document.getElementById("nombrePersonaContacto").value = "";
    document.getElementById("telefonoPersonaContacto").value = "";

}
