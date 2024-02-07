var medicos = [];

                // Función para agregar un médico a la tabla y al array
                function agregarMedico() {
                    var tipo_documento = document.getElementById("tipo_documento").value;
                    var numero_documento = document.getElementById("numero_documento").value;
                    var primer_nombre = document.getElementById("primer_nombre").value;
                    var segundo_nombre = document.getElementById("segundo_nombre").value;
                    var primer_apellido = document.getElementById("primer_apellido").value;
                    var segundo_apellido = document.getElementById("segundo_apellido").value;
                    var telefono = document.getElementById("telefono").value;
                    var correo = document.getElementById("correo").value;
                    var direccion = document.getElementById("direccion").value;
                    var especialidad = document.getElementById("especialidad").value;

                    // Agregar el médico al array
                    medicos.push({ tipo_documento: tipo_documento, numero_documento: numero_documento, primer_nombre: primer_nombre, segundo_nombre: segundo_nombre, primer_apellido: primer_apellido, segundo_apellido: segundo_apellido, telefono: telefono, correo: correo, direccion: direccion, especialidad: especialidad });

                    // Actualizar la tabla
                    actualizarTabla();
                }

                // Función para filtrar los médicos en la tabla
                function filtrarMedicos() {
                    var filtroEspecialidad = document.getElementById("filtro_especialidad").value.toLowerCase();
                    var tabla = document.getElementById("tabla_medicos");
                    var rows = tabla.getElementsByTagName("tr");

                    for (var i = 1; i < rows.length; i++) {
                        var especialidad = rows[i].getElementsByTagName("td")[1].innerText.toLowerCase();
                        if (especialidad.includes(filtroEspecialidad) || filtroEspecialidad === "") {
                            rows[i].style.display = "";
                        } else {
                            rows[i].style.display = "none";
                        }
                    }
                }

                // Función para actualizar la tabla de médicos
                function actualizarTabla() {
                    var tabla = document.getElementById("tabla_medicos");
                    tabla.innerHTML = `
            <tr>
                <th>TipoDocumento</th>
                <th>NumeroDocumento</th>
                <th>PrimerNombre</th>
                <th>SegundoNombre</th>
                <th>PrimerApellido</th>
                <th>SegundoApellido</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Direccion</th>
                <th>especialidad</th>
                <th>Acciones</th>
                </tr>
                `;

                    for (var i = 0; i < medicos.length; i++) {
                        tabla.innerHTML += `
                    <tr>
                        <td>${medicos[i].tipo_documento}</td>
                        <td>${medicos[i].numero_documento}</td>
                        <td>${medicos[i].primer_nombre}</td>
                        <td>${medicos[i].segundo_nombre}</td>
                        <td>${medicos[i].primer_apellido}</td>
                        <td>${medicos[i].segundo_apellido}</td>
                        <td>${medicos[i].telefono}</td>
                        <td>${medicos[i].correo}</td>
                        <td>${medicos[i].direccion}</td>
                        <td>${medicos[i].especialidad}</td>
                        <td>
                            <button onclick="editarMedico(${i})">Editar</button>
                            <button onclick="deshabilitarMedico(${i})">Deshabilitar</button>
                            </td>
                            </tr>
                            `;
                    }
                }

                // Función para editar un médico
                function editarMedico(index) {
                    var nuevoTipoDocu = prompt("INGRESE EL NUEVO TIPO DE DOCUMENTO:", medicos[index].tipo_documento);
                    var nuevoNumeroDocu = prompt("INGRESE EL NUEVO EL NUEVO NUMERO DE DOCUMENTO:", medicos[index].numero_documento);
                    var nuevoPrimerNom = prompt("INGRESE EL NUEVO PRIMER NOMBRE:", medicos[index].primer_nombre);
                    var nuevoSegundoNom = prompt("INGRESE EL NUEVO SEGUNDO NOMBRE:", medicos[index].segundo_nombre);
                    var nuevoPrimerApe = prompt("INGRESE EL NUEVO PRIMER APELLIDO:", medicos[index].primer_apellido);
                    var nuevoSegundoApe = prompt("INGRESE EL NUEVO SEGUNDO APELLIDO:", medicos[index].segundo_apellido);
                    var nuevoTelefono = prompt("INGRESE EL NUEVO TELEFONO:", medicos[index].telefono);
                    var nuevoCorreo = prompt("INGRESE EL NUEVO CORREO:", medicos[index].correo);
                    var nuevoDireccion = prompt("INGRESE LA NUEVA DIRECCION:", medicos[index].direccion);
                    var nuevoEspecialidad = prompt("INGRESE LA NUEVA ESPECIALIDAD:", medicos[index].especialidad);
                    // Actualizar los datos del médico en el array
                    if (nuevoTipoDocu !== null && nuevoNumeroDocu !== null && nuevoPrimerNom !== null && nuevoSegundoNom !== null && nuevoPrimerApe !== null && nuevoSegundoApe !== null && nuevoTelefono !== null && nuevoCorreo !== null && nuevoDireccion !== null && nuevoEspecialidad !== null) {
                        medicos[index].tipo_documento = nuevoTipoDocu;
                        medicos[index].numero_documento = nuevoNumeroDocu;
                        medicos[index].primer_nombre = nuevoPrimerNom;
                        medicos[index].segundo_nombre = nuevoSegundoNom;
                        medicos[index].primer_apellido = nuevoPrimerApe;
                        medicos[index].segundo_apellido = nuevoSegundoApe;
                        medicos[index].telefono = nuevoTelefono;
                        medicos[index].correo = nuevoCorreo;
                        medicos[index].direccion = nuevoDireccion;
                        medicos[index].especialidad = nuevoEspecialidad;

                        // Actualizar la tabla
                        actualizarTabla();
                    }
                }

                // Función para deshabilitar un médico
                function deshabilitarMedico(index) {
                    // Eliminar el médico del array
                    medicos.splice(index, 1);

                    // Actualizar la tabla
                    actualizarTabla();
                }