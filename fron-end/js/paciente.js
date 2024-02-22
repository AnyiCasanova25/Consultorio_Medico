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
                        Swal.fire({
                            title: "LISTO",
                            text: "Felicidades registrado con exito",
                            icon: "success"
                        });
                        $('#exampleModal').modal('hide');
                        listarPaciente();
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
            document.getEleentById("segundoApellido").value = "";
            document.getElementById("Celular").value = "";
            document.getElementById("Correo").value = "";
            document.getElementById("Estado").value = "";
            document.getElementById("nombrePersonaContacto").value = "";
            document.getElementById("telefonoPersonaContacto").value = "";
        
        }
        